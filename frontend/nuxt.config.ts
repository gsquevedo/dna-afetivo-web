import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    public: {
      nuxtPublicApiKey: process.env.NUXT_PUBLIC_API_KEY,
      nuxtPublicAuthDomain: process.env.NUXT_PUBLIC_AUTH_DOMAIN,
      nuxtPublicProjectId: process.env.NUXT_PUBLIC_PROJECT_ID,
      nuxtPublicStorageBucket: process.env.NUXT_PUBLIC_STORAGE_BUCKET,
      nuxtPublicMessagingSenderId: process.env.NUXT_PUBLIC_MESSAGING_SENDER_ID,
      nuxtPublicAppId: process.env.NUXT_PUBLIC_APP_ID,
      nuxtPublicMeasurementId: process.env.NUXT_PUBLIC_MEASUREMENT_ID,
    }
  },
  ssr: true,
  css: [
    '@/assets/css/global.css'
  ],
  plugins: [
    '~/plugins/firebase.client.js'
  ],
  hooks: {
    'pages:extend'(routes) {
      routes.push(
        {
          name: 'IndexPage',
          path: '/',
          file: resolve(__dirname, './src/pages/Index.vue'),
        },
        {
          name: 'GamePage',
          path: '/game',
          file: resolve(__dirname, './src/pages/Game.vue'),
        },
        {
          name: 'ActionsPage',
          path: '/actions',
          file: resolve(__dirname, './src/pages/Actions.vue'),
        },
        {
          name: 'ContactPage',
          path: '/contact',
          file: resolve(__dirname, './src/pages/Contact.vue'),
        },
        {
          name: 'LoginPage',
          path: '/login',
          file: resolve(__dirname, './src/pages/Login.vue'),
        },
      );
    }
  }
});
