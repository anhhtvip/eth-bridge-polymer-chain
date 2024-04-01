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
    },
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
