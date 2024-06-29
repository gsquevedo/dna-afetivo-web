<template>
  <div class="navbar">
    <nav class="navbar-content">
      <div class="navbar-logo">
        <img :src="logo" width="110" height="80"/>
      </div>
      <ul>
        <li><nuxt-link to="/" exact>Sobre</nuxt-link></li>
        <li><nuxt-link to="/game">Jogo</nuxt-link></li>
        <li><nuxt-link to="/actions">Ações</nuxt-link></li>
        <li><nuxt-link to="/contact">Contato</nuxt-link></li>
        <li><nuxt-link to="/login">Login</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import logo from "../../assets/logo.png";

</script>

<style scoped>
.navbar {
  margin: 0;
  padding: 0;
  background-color: #C4A968;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}

ul {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
  margin-left: 50px;
}

a {
  text-decoration: none;
  color: inherit;
  padding: 10px 15px;
  transition: background-color 0.2s ease, padding 0.2s ease;
}

a:hover {
  background-color: #E1D4B3;
  padding: 15px 25px;
  border-radius: 10px;
}

.active {
  font-weight: bold;
}
</style>
