<template>
  <div class="layout">
    <Navbar v-if="showNavbar"/>
    <NuxtPage />
  </div>
</template>

<script setup>
import { computed, onMounted, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useNavbarStore } from '../store/navbar';
import Navbar from "../components/Navbar.vue";

// Obtenha a store
const navbarStore = useNavbarStore();

// Crie uma referência reativa para controlar a visibilidade da Navbar
const showNavbar = computed(() => navbarStore.showNavbar);

// Função que verifica a rota atual e ajusta a visibilidade da Navbar
const checkAuth = () => {
  const route = useRoute();

  // Verifique se a rota é '/login'
  if (route.path === '/login') {
    navbarStore.hideNavbar();
  } else {
    navbarStore.showNavbar();
  }
};

// Verifique a rota atual ao montar o componente
onMounted(() => {
  checkAuth();
});

// Reaja às mudanças de rota
watchEffect(() => {
  checkAuth();
});
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
