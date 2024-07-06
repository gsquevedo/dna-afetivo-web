import { resolve } from 'path';
import dotenv from 'dotenv'

dotenv.config()

export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  runtimeConfig: {
    public: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
    }
  },
  ssr: true,
  css: [
    '@/assets/css/global.css'
  ],
  plugins: [
    '~/plugins/firebase.js'
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
    },
  }
})
