<template>
  <div class="layout">
    <Navbar/>
    <NuxtPage />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Navbar
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
