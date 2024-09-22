<template>
  <div class="page-container">
    <h1>Produtos</h1>
    <p>Bem-vindo à página de produtos.</p>

  </div>
</template>

<script>
import { NTabs, NTabPane } from 'naive-ui';

export default {
  name: 'ProductsPage',
  components: {
    NTabs,
    NTabPane
  },
  data() {
    return {
      activeTab: 'overview' 
    };
  }
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}
</style>
