<template>
  <div id="app">
    <DefaultLayout dir="routing/pages" current-route/>
  </div>
</template>

<script>
import DefaultLayout from './src/pages/DefaultLayout.vue'

export default {
  components: {
    DefaultLayout
  },
  data() {
    const router = useRouter()
  },
}
</script>
