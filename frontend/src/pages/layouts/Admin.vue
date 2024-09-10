<template>
  <div class="admin-layout">
    <header>
      <nav>
        <nuxt-link to="/admin">Dashboard</nuxt-link>
        <nuxt-link to="/admin/content">Gerenciar Conteúdo</nuxt-link>
        <button @click="logout">Sair</button>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { useRouter } from '#app';

const router = useRouter();

const logout = () => {
  // Lógica para deslogar o usuário (Firebase Auth ou outra autenticação)
  router.push('/admin/login');
};
</script>

<style scoped>
.admin-layout {
  display: flex;
  flex-direction: column;
}

header {
  background-color: #333;
  color: white;
  padding: 1rem;
}

nav {
  display: flex;
  gap: 1rem;
}

main {
  padding: 2rem;
}
</style>
