// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Polymer eth bridge',
    },
  },
  css: ['bootstrap/dist/css/bootstrap.min.css', 'assets/index.css'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      WALLET_CONNECT_PROJECT_ID: process.env.WALLET_CONNECT_PROJECT_ID,
      OP_BRIDGE_CONTRACT: process.env.OP_BRIDGE_CONTRACT,
      OP_CHANNEL_ID: process.env.OP_CHANNEL_ID,
      BASE_BRIDGE_CONTRACT: process.env.BASE_BRIDGE_CONTRACT,
      BASE_CHANNEL_ID: process.env.BASE_CHANNEL_ID,
      TIMEOUT: process.env.TIMEOUT,
    },
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
