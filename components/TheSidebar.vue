<template>
            <div id="desktop-nav-sidebar"
          class="group hidden md:flex md:flex-col h-screen py-5 pt-8 bg-surface-default border-r border-subdued transition-all duration-700 ease-in-out relative md:w-48">
          <div role="button" tabindex="0"
            class="group-hover:flex absolute hidden h-5 hover:stroke-white stroke-black hover:bg-primary-default-hover items-center rounded-full w-5 justify-center right-0 -mr-2.5 bg-surface-default dark:bg-portfolio-slateGray-400 dark:border dark:hover:border-primary-default-hover border-default dark:stroke-white dark:hover:bg-primary-default-hover z-50 -mt-2"
            style="box-shadow: rgba(80, 81, 106, 0.2) 0px 1px 4px;"><svg width="16" height="16" viewBox="0 0 16 16"
              class="" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L6 8L9 11" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg></div>
          <div class="mt-6 flex flex-col overflow-y-auto h-full">
            <nav class="mt-8">
              <div class="space-y-3">
                <a id="sidebar-item-Bridge" aria-current="page"
                  class="group flex items-center px-4 py-2 hover:bg-surface-subdued relative text-primary-default dark:text-white font-semibold"
                  href="/">
                  <div class="hidden md:inline-block h-6 w-0.5 bg-primary-default absolute right-0"></div>
                  <div class="flex justify-center items-center mr-2"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M2.88583 11.0961C2.08173 11.3553 1.5 12.1097 1.5 13C1.5 14.1046 2.39543 15 3.5 15C4.60457 15 5.5 14.1046 5.5 13C5.5 12.2172 5.05025 11.5394 4.39505 11.211C4.98024 8.65597 7.26754 6.75 10 6.75C11.8379 6.75 13.4744 7.61231 14.5271 8.95443C14.9983 8.7242 15.5157 8.57388 16.0616 8.52109C14.7656 6.55072 12.5347 5.25 10 5.25C6.47625 5.25 3.53966 7.7639 2.88583 11.0961ZM18.5 13C18.5 14.1046 17.6046 15 16.5 15C15.3954 15 14.5 14.1046 14.5 13C14.5 11.8954 15.3954 11 16.5 11C17.6046 11 18.5 11.8954 18.5 13Z"
                        class="fill-primary-default h-5 w-5 stroke-primary-default"></path>
                    </svg></div><span class="truncate">Deposit</span>
                </a>
                <a id="sidebar-item-Bridge" aria-current="page"
                  class="group flex items-center px-4 py-2 hover:bg-surface-subdued relative text-primary-default dark:text-white font-semibold"
                  href="/bridge">
                  <div class="hidden md:inline-block h-6 w-0.5 bg-primary-default absolute right-0"></div>
                  <div class="flex justify-center items-center mr-2"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M2.88583 11.0961C2.08173 11.3553 1.5 12.1097 1.5 13C1.5 14.1046 2.39543 15 3.5 15C4.60457 15 5.5 14.1046 5.5 13C5.5 12.2172 5.05025 11.5394 4.39505 11.211C4.98024 8.65597 7.26754 6.75 10 6.75C11.8379 6.75 13.4744 7.61231 14.5271 8.95443C14.9983 8.7242 15.5157 8.57388 16.0616 8.52109C14.7656 6.55072 12.5347 5.25 10 5.25C6.47625 5.25 3.53966 7.7639 2.88583 11.0961ZM18.5 13C18.5 14.1046 17.6046 15 16.5 15C15.3954 15 14.5 14.1046 14.5 13C14.5 11.8954 15.3954 11 16.5 11C17.6046 11 18.5 11.8954 18.5 13Z"
                        class="fill-primary-default h-5 w-5 stroke-primary-default"></path>
                    </svg></div><span class="truncate">Bridge</span>
                </a>
            </div>
            </nav>
          </div>
        </div>
</template>