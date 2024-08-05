<template>
  <div class="layout">
    <!-- Verifica se a rota não é '/login' antes de renderizar a Navbar -->
    <Navbar v-if="!isLoginPage"/>
    <NuxtPage />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar
  },
  computed: {
    isLoginPage() {
      // Verifica a rota atual
      return this.$route.path === '/login';
    }
  }
};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
