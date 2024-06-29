import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  ssr: true,
  css: [
    '@/assets/css/global.css'
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
  },
})
