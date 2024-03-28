<script setup lang="ts">
import {
  useBalance,
  useChainId,
  useContractEvent,
  useContractRead,
  useContractWrite,
  useSwitchNetwork,
} from 'use-wagmi'
import { defaultChain } from '~/config/chain'
import { abi } from '~/config/api'

const config = useRuntimeConfig()
const { data: balance, isLoading: isLoadingBalance, refetch: refetchBalance } = useBalance({
  chainId: defaultChain.id,
  address: `0x${config.public.LOTTERY_CONTRACT_ADDRESS}`,
})
const { data: players, isLoading: isLoadingPlayers, refetch: refetchPlayers } = useContractRead({
  chainId: defaultChain.id,
  address: `0x${config.public.LOTTERY_CONTRACT_ADDRESS}`,
  abi,
  functionName: 'getPlayers',
})
useContractEvent({
  chainId: defaultChain.id,
  address: `0x${config.public.LOTTERY_CONTRACT_ADDRESS}`,
  abi,
  eventName: 'Enter',
  listener: () => {
    refetchBalance()
    refetchPlayers()
  },
})
useContractEvent({
  chainId: defaultChain.id,
  address: `0x${config.public.LOTTERY_CONTRACT_ADDRESS}`,
  abi,
  eventName: 'Winner',
  listener: () => {
    refetchBalance()
    refetchPlayers()
  },
})

const chainId = useChainId()
const { switchNetworkAsync } = useSwitchNetwork({
  chainId: defaultChain.id,
})
const { data, write, isLoading, isSuccess, isError } = useContractWrite({
  chainId: defaultChain.id,
  address: `0x${config.public.LOTTERY_CONTRACT_ADDRESS}`,
  abi,
  functionName: 'pickWinner',
  args: [config.public.LOTTERY_CHANNEL_ID, config.public.LOTTERY_TIMEOUT],
})

async function pickWinner() {
  if (chainId.value !== defaultChain.id)
    await switchNetworkAsync()

  write()
}
</script>

<template>
        <TheSidebar />
        <div id="desktop-main-content" class="flex flex-col min-h-screen w-full overflow-y-auto relative">

<main class="flex-1 isolate">
  <div class="text-sm md:text-base h-full w-full">
    <div id="page-card" class="pb-10 md:mx-4 my-4 lg:mx-8 lg:my-0">
      <div
        class="bg-alternative px-4 pb-10 sm:px-10 sm:pt-8 sm:pb-12 lg:px-4 bg-alternative !pb-0 flex flex-col -mb-10 space-y-4 md:space-y-6">
       
        <div></div>
        <div class="mx-auto space-y-4 md:space-y-6 w-full lg:w-[800px]">
          <div class="flex items-center w-full justify-center">
            <div
              class="flex flex-col space-y-6 text-default bg-surface-default px-4 p-6 md:p-6 w-full rounded-2xl">
              <div>
                <div class="flex justify-center items-center w-full">
                  <div class="flex items-center space-x-2"><span
                      class="inline-block text-xl font-semibold" style="font-size: 35px;">Bridge tokens</span>
                  </div>
                </div>
                <br>
                <div class="flex justify-center items-center w-full">
                  <p class="font-light items-center">Transfer your tokens from one network to another.&nbsp;
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-11 gap-x-6 gap-y-4">
                <div class="flex flex-col gap-y-4 col-span-1 lg:col-span-5">
                  <div class="flex flex-col space-y-1"><label class="w-full">
                      <div class="font-semibold text-sm md:text-lg">From this network</div>
                    </label>
                    <div>
                      <div>
                        <div id="networks-dropdown" class="relative text-left" data-headlessui-state="">

                          <select class="form-select form-select-lg mb-3 flex w-full text-sm md:text-lg text-left h-10 md:h-16 cursor-pointer focus:outline-none overflow-hidden border items-center py-1.5 px-3 justify-between hover:bg-alternative border-subdued rounded-lg" aria-label=".form-select-lg example">
                            <option selected>Select a network</option>
                            <option value="1">Base </option>
                            <option value="2">Optimum</option>
                          </select>
                          </div>
                        <div
                          class="flex h-4 lg:h-7 pt-1 lg:pt-2 -mb-3 lg:-mb-2 text-xs md:text-sm text-subdued justify-end lg:justify-between">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col space-y-1"><label class="w-full">
                      <div class="font-semibold text-sm md:text-lg">You send</div>
                    </label>
                    <div>
                      <div id="from-token-dropdown">
                        <div class="relative bg-surface-default">
                          <div
                            class="flex relative h-10 md:h-16 w-full border rounded bg-surface-default border-subdued">
                            <input class="flex flex-row w-full text-left cursor-default focus:outline-none overflow-hidden items-center rounded-lg bg-alternative" type='number'></input>

                          </div>
                          <div>
                            <div class="flex h-4 md:h-5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex flex-row justify-end lg:justify-center col-span-1 mt-2 md:mt-4 lg:mt-0 mr-2 lg:mr-0">
                  <button class="hover:rotate-180 align-middle disabled:text-disabled text-subdued"
                    disabled=""><svg aria-hidden="true" focusable="false" data-prefix="fas"
                      data-icon="right-left" class="svg-inline--fa fa-right-left rotate-90 lg:rotate-0"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z">
                      </path>
                    </svg></button>
                </div>
                <div class="flex flex-col gap-y-4 col-span-1 lg:col-span-5">
                  <div class="flex flex-col space-y-1"><label class="w-full">
                      <div class="font-semibold text-sm md:text-lg">To this network</div>
                    </label>
                    <div>
                      <div id="networks-dropdown" class="relative text-left" data-headlessui-state="">   <select class="form-select form-select-lg mb-3 flex w-full text-sm md:text-lg text-left h-10 md:h-16 cursor-pointer focus:outline-none overflow-hidden border items-center py-1.5 px-3 justify-between hover:bg-alternative border-subdued rounded-lg" aria-label=".form-select-lg example">
                        <option selected>Select a network</option>
                        <option value="1">Base <svg aria-hidden="true" focusable="false" data-prefix="fas"
                          data-icon="right-left" class="svg-inline--fa fa-right-left rotate-90 lg:rotate-0"
                          role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor"
                            d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z">
                          </path>
                        </svg></option>
                        <option value="2">Optimum</option>
                      </select></div>
                      <div class="flex lg:h-5"></div>
                    </div>
                  </div>
                  <div class="flex flex-col space-y-1"><label class="w-full">
                      <div class="font-semibold text-sm md:text-lg">You receive</div>
                    </label>
                    <div>
                      <div id="from-token-dropdown">
                        <div class="relative bg-surface-default">
                          <div
                            class="flex relative h-10 md:h-16 w-full border rounded bg-surface-default border-subdued">
                                <input class="flex flex-row w-full text-left cursor-default focus:outline-none overflow-hidden items-center rounded-lg bg-alternative" type='number'></input>
                          </div>
                          <div>
                            <div class="mb-8 sm:mb-4 md:mb-5 lg:mb-10"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="z-40 md:z-0 -mx-4 md:-mx-0 pb-4 w-full fixed bottom-0 md:bottom-auto md:relative flex flex-col items-center bg-surface-subdued md:bg-alternative mt-5 space-y-2 mb-10">
            <div
              class="flex justify-between items-center bg-surface-subdued md:rounded-xl w-screen md:w-full p-4 sm:p-6 gap-2 md:gap-6">
              <div class="flex-2 lg:flex-1 flex flex-col w-fit whitespace-nowrap">
                <h3 class="text-subdued flex whitespace-nowrap">Total (send + gas)</h3>
                <h1 class="font-bold text-xl">$0.00</h1>
              </div><button 
                class="text-md transition px-5 rounded-full border flex items-center justify-center text-center  border-primary-default bg-primary-default text-inverse w-full lg:w-[515px] py-3.5 h-fit"><span>Confirm</span></button>
            </div>
          </div>
          <div
            class="xl:fixed xl:w-min xl:bottom-10 xl:right-10 md:flex-row md:flex-wrap flex flex-col gap-4 md:z-40 pointer-events-none w-full justify-center">
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
</div>
</template>