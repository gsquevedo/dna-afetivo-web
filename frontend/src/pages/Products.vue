<template>
  <div class="page-container">
    <h1>Produtos</h1>
    <p>Bem-vindo à página de produtos.</p>

    <!-- Tabs -->
    <div class="tabs-wrapper">
      <n-tabs type="segment" animated v-model:value="activeTab" class="custom-tabs">
        <n-tab-pane name="overview" tab="Tab 1">
          <div class="tab-content">
            <h2>Tab 1</h2>
            <p>Informações gerais sobre o jogo.</p>
          </div>
        </n-tab-pane>
        <n-tab-pane name="rules" tab="Tab 2">
          <div class="tab-content">
            <h2>Tab 2</h2>
            <p>Informações gerais sobre o jogo.</p>
          </div>
        </n-tab-pane>
        <n-tab-pane name="history" tab="Tab 3">
          <div class="tab-content">
            <h2>Tab 3</h2>
            <p>Informações gerais sobre o jogo.</p>
          </div>
        </n-tab-pane>
      </n-tabs>
    </div>
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
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}

.tabs-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.custom-tabs {
  width: 100vw; 
}

.tab-content {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 20px;
  text-align: left;
}
</style>
