<script setup lang="ts">
import { useChainId, useContractWrite, useSwitchNetwork } from 'use-wagmi'
import { parseEther } from 'viem'
import { baseSepolia, optimismSepolia } from 'viem/chains'
import { abi } from '~/config/api'

const chainId = useChainId()
const { switchNetworkAsync } = useSwitchNetwork()
const config = useRuntimeConfig()
const isProcessing = ref(false);
const result = ref(null);
const { data: dataOP, writeAsync: writeOP, isLoading: isLoadingOP, isSuccess: isSuccessOP, isError: isErrorOP } = useContractWrite({
  address: `0x${config.public.OP_BRIDGE_CONTRACT}`,
  abi,
  functionName: 'bridge',
})
const { data: dataBase, writeAsync: writeBase, isLoading: isLoadingBase, isSuccess: isSuccessBase, isError: isErrorBase } = useContractWrite({
  address: `0x${config.public.BASE_BRIDGE_CONTRACT}`,
  abi,
  functionName: 'bridge',
})

const amount = ref(null)

const networks = [
  {
    chainId: 84532,
    name: 'Base',
    exploreUrl: "https://base-sepolia.blockscout.com/",
  },
  {
    chainId: 11155420,
    name: 'Optimism',
    exploreUrl: "https://optimism-sepolia.blockscout.com/"
  },
]

const fromNetwork = ref(networks[0].chainId)
const toNetwork = ref(networks[1].chainId)
watch(fromNetwork, async (newVal) => {
  toNetwork.value = newVal === networks[0].chainId ? networks[1].chainId : networks[0].chainId
})
watch(toNetwork, async (newVal) => {
  fromNetwork.value = newVal === networks[0].chainId ? networks[1].chainId : networks[0].chainId
})

async function bridge() {
  isProcessing.value = true;
  if (chainId.value !== fromNetwork.value)
    await switchNetworkAsync(fromNetwork.value)

  if (chainId.value === baseSepolia.id) {
    const re = await writeBase({
      args: [config.public.BASE_CHANNEL_ID, config.public.TIMEOUT, toNetwork.value],
      value: parseEther(amount.value.toString()),
    })
    result.value = networks[0].exploreUrl + "tx/" + re.hash
  }
  else if (chainId.value === optimismSepolia.id) {
    const re = await writeOP({
      args: [config.public.OP_CHANNEL_ID, config.public.TIMEOUT, toNetwork.value],
      value: parseEther(amount.value.toString()),
    })
    result.value = networks[1].exploreUrl + "tx/" + re.hash

  }
  isProcessing.value = false;
}
</script>

<template>
  <TheSidebar />
  <div id="desktop-main-content" class="flex flex-col min-h-screen w-full overflow-y-auto relative">
    <main class="flex-1 isolate">
      <div class="text-sm md:text-base h-full w-full">
        <div id="page-card" class="pb-10 md:mx-4 my-4 lg:mx-8 lg:my-0">
          <div
            class="bg-alternative px-4 pb-10 sm:px-10 sm:pt-8 sm:pb-12 lg:px-4 bg-alternative !pb-0 flex flex-col -mb-10 space-y-4 md:space-y-6"
          >
            <div />
            <div class="mx-auto space-y-4 md:space-y-6 w-full lg:w-[800px]">
              <div class="flex items-center w-full justify-center">
                <div
                  class="flex flex-col space-y-6 text-default bg-surface-default px-4 p-6 md:p-6 w-full rounded-2xl"
                >
                  <div>
                    <div class="flex justify-center items-center w-full">
                      <div class="flex items-center space-x-2">
                        <span
                          class="inline-block text-xl font-semibold" style="font-size: 35px;"
                        >Bridge tokens</span>
                      </div>
                    </div>
                    <br>
                    <div class="flex justify-center items-center w-full">
                      <p class="font-light items-center">
                        Transfer your tokens from one network to another.&nbsp;
                      </p>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 lg:grid-cols-11 gap-x-6 gap-y-4">
                    <div class="flex flex-col gap-y-4 col-span-1 lg:col-span-5">
                      <div class="flex flex-col space-y-1">
                        <label class="w-full">
                          <div class="font-semibold text-sm md:text-lg">From this network</div>
                        </label>
                        <div>
                          <div>
                            <div id="networks-dropdown" class="relative text-left" data-headlessui-state="">
                              <select v-model="fromNetwork" class="form-select form-select-lg mb-3 flex w-full text-sm md:text-lg text-left h-10 md:h-16 cursor-pointer focus:outline-none overflow-hidden border items-center py-1.5 px-3 justify-between hover:bg-alternative border-subdued rounded-lg" aria-label=".form-select-lg example">
                                <option v-for="network in networks" :key="network.chainId" :value="network.chainId">
                                  {{ network.name }}
                                </option>
                              </select>
                            </div>
                            <div
                              class="flex h-4 lg:h-7 pt-1 lg:pt-2 -mb-3 lg:-mb-2 text-xs md:text-sm text-subdued justify-end lg:justify-between"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="flex flex-row justify-end lg:justify-center col-span-1 mt-2 md:mt-4 lg:mt-0 mr-2 lg:mr-0"
                    >
                      <button class="hover:rotate-180 align-middle disabled:text-disabled text-subdued">
                        <svg
                          aria-hidden="true" focusable="false" data-prefix="fas"
                          data-icon="right-left" class="svg-inline--fa fa-right-left rotate-90 lg:rotate-0"
                          role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div class="flex flex-col gap-y-4 col-span-1 lg:col-span-5">
                      <div class="flex flex-col space-y-1">
                        <label class="w-full">
                          <div class="font-semibold text-sm md:text-lg">To this network</div>
                        </label>
                        <div>
                          <div id="networks-dropdown" class="relative text-left" data-headlessui-state="">
                            <select v-model="toNetwork" class="form-select form-select-lg mb-3 flex w-full text-sm md:text-lg text-left h-10 md:h-16 cursor-pointer focus:outline-none overflow-hidden border items-center py-1.5 px-3 justify-between hover:bg-alternative border-subdued rounded-lg" aria-label=".form-select-lg example">
                              <option v-for="network in networks" :key="network.chainId" :value="network.chainId">
                                {{ network.name }}
                              </option>
                            </select>
                          </div>
                          <div class="flex lg:h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col space-y-1">
                    <label class="w-full">
                      <div class="font-semibold text-sm md:text-lg">Amount: </div>
                    </label>
                    <div>
                      <div id="from-token-dropdown">
                        <div class="relative bg-surface-default">
                          <div
                            class="flex relative h-10 md:h-16 w-full border rounded bg-surface-default border-subdued"
                          >
                            <input v-model="amount" class="flex flex-row w-full text-left cursor-default focus:outline-none overflow-hidden items-center rounded-lg bg-alternative" type="number" placeholder="0">
                          </div>
                          <div>
                            <div class="flex h-4 md:h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="z-40 md:z-0 -mx-4 md:-mx-0 pb-4 w-full fixed bottom-0 md:bottom-auto md:relative flex flex-col items-center bg-surface-subdued md:bg-alternative mt-5 space-y-2 mb-10"
              >
                <div
                  class="flex justify-between items-center bg-surface-subdued md:rounded-xl w-screen md:w-full p-4 sm:p-6 gap-2 md:gap-6"
                >
                  <button
                    class="text-md transition px-5 rounded-full border flex items-center justify-center text-center border-primary-default bg-primary-default text-inverse w-full py-3.5 h-fit"
                    :disabled="amount <= 0 || isProcessing"
                    @click="bridge"
                  >
                  <svg v-if="isProcessing" class="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.96 7.96 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm12 0l3 2.647A7.959 7.959 0 0120 12h-4c0 2.228-.904 4.235-2.35 5.708L16 17.292zM6 6.709l-3 2.647A7.959 7.959 0 014 12h4c0-2.228.904-4.235 2.35-5.708L6 6.709z"></path>
                        </svg>
                        <!-- Nội dung nút -->
                  <span v-if="!isProcessing">Bridge</span>
                    
                  </button>
                </div>
                <br>
                <div
                    v-if="result !== null"
                    class="justify-center text-center w-full mt-10"
                  >
                    <a target="_blank" :href="result">
                      Following Transaction Hash (Click here)
                    </a>
                  </div>
              </div>
              <div
                class="xl:fixed xl:w-min xl:bottom-10 xl:right-10 md:flex-row md:flex-wrap flex flex-col gap-4 md:z-40 pointer-events-none w-full justify-center"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
