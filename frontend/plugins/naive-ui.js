import { defineNuxtPlugin } from '#app'
import { create } from 'naive-ui'

export default defineNuxtPlugin(nuxtApp => {
  const naive = create() // Cria com todos os componentes incluídos automaticamente

  nuxtApp.vueApp.use(naive)
})
