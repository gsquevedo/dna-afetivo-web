<template>
  <div class="layout">
    <!-- Verifica se a rota não é '/login' antes de renderizar a Navbar -->
    <Navbar v-if="!isLoginPage"/>
    <NuxtPage />
    <Footer v-if="!isLoginPage"/>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue"

export default {
  components: {
    Navbar,
    Footer,
  },
  computed: {
    isLoginPage() {
      // Verifica a rota atual
      return this.$route.path === '/admin/login';
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
