<template>
  <div class="layout">
    <!-- Verifica se a rota não é '/login' e '/create' antes de renderizar a Navbar -->
    <Navbar v-if="!isNoNavbarFooterPage"/>
    <NuxtPage />
    <Footer v-if="!isNoNavbarFooterPage"/>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  computed: {
    // Verifica se a rota é '/login' ou '/create'
    isNoNavbarFooterPage() {
      return this.$route.path === '/admin/sign-in' || this.$route.path === '/admin/sign-up';
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
