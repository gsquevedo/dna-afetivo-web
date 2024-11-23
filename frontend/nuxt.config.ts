import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  modules: ['@pinia/nuxt', 'nuxtjs-naive-ui'],
  runtimeConfig: {
    public: {
      nuxtPublicApiKey: process.env.NUXT_PUBLIC_API_KEY,
      nuxtPublicAuthDomain: process.env.NUXT_PUBLIC_AUTH_DOMAIN,
      nuxtPublicProjectId: process.env.NUXT_PUBLIC_PROJECT_ID,
      nuxtPublicStorageBucket: process.env.NUXT_PUBLIC_STORAGE_BUCKET,
      nuxtPublicMessagingSenderId: process.env.NUXT_PUBLIC_MESSAGING_SENDER_ID,
      nuxtPublicAppId: process.env.NUXT_PUBLIC_APP_ID,
      nuxtPublicMeasurementId: process.env.NUXT_PUBLIC_MEASUREMENT_ID,
      nuxtPublicDatabaseUrl: process.env.FIREBASE_DATABASE_URL
    }
  },
  ssr: true,
  css: [
    '@/assets/css/global.css'
  ],
  plugins: [
    '~/plugins/firebase.client.js',
    '~/plugins/naive-ui.js',
  ],
  hooks: {
    'pages:extend'(routes) {
      routes.push(
        {
          name: 'IndexPage',
          path: '/',
          file: resolve(__dirname, './src/pages/public/Index.vue'),
        },
        {
          name: 'ProductsPage',
          path: '/products',
          file: resolve(__dirname, './src/pages/Products.vue'),
        },
        {
          name: 'ActionsPage',
          path: '/actions',
          file: resolve(__dirname, './src/pages/Actions.vue'),
        },
        {
          name: 'AddActionPage',
          path: '/admin/actions',
          file: resolve(__dirname, './src/pages/admin/AddActions.vue'),
        },
        {
          name: 'PublicationsPage',
          path: '/publications',
          file: resolve(__dirname, './src/pages/Publications.vue'),
        },
        {
          name: 'SignIn',
          path: '/admin/sign-in',
          file: resolve(__dirname, './src/pages/admin/SignIn.vue'),
        },
        {
          name: 'PublicationsAdmin',
          path: '/admin/publications',
          file: resolve(__dirname, './src/pages/admin/AddPublications.vue'),
        },
        {
          name: 'SignUp',
          path: '/admin/sign-up',
          file: resolve(__dirname, './src/pages/admin/SignUp.vue'),
        },
      );
    }
  },
  compatibilityDate: '2024-09-21'
});