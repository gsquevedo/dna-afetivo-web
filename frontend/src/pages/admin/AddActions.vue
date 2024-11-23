<template>
  <div class="card-container">
    <h2>Exposições</h2>
    <div class="card-group">
      <Card
        v-for="item in exhibitions"
        :key="item.id"
        :image="item.image"
        :title="item.title"
        :description="item.description"
        :onClick="() => handleCardClick(item)"
      />
    </div>

    <h2>Oficinas</h2>
    <div class="card-group">
      <Card
        v-for="item in workshops"
        :key="item.id"
        :image="item.image"
        :title="item.title"
        :description="item.description"
        :onClick="() => handleCardClick(item)"
      />
    </div>

    <!-- Modal -->
    <Modal
      v-if="isModalVisible"
      :isVisible="isModalVisible"
      :title="selectedItem?.title"
      :content="selectedItem?.description"
      @close="isModalVisible = false"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getDatabase, ref as dbRef, get } from 'firebase/database';
import { db } from '../firebaseConfig'; // Importa a configuração do Firebase
import Card from '../components/Card.vue';
import Modal from '../components/Modal.vue';

export default {
  name: 'AddActionPage',
  components: {
    Card,
    Modal
  },
  setup() {
    // Referências reativas para exposições e oficinas
    const exhibitions = ref([]);
    const workshops = ref([]);
    const isModalVisible = ref(false);
    const selectedItem = ref(null);

    // Função para buscar dados do Firebase
    const fetchData = async () => {
      try {
        const exhibitionsRef = dbRef(db, 'exhibitions/');
        const workshopsRef = dbRef(db, 'workshops/');

        // Obtendo dados de exposições e oficinas do Firebase
        const exhibitionsSnapshot = await get(exhibitionsRef);
        const workshopsSnapshot = await get(workshopsRef);

        if (exhibitionsSnapshot.exists()) {
          exhibitions.value = Object.entries(exhibitionsSnapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
        } else {
          console.log('Nenhuma exposição encontrada.');
        }

        if (workshopsSnapshot.exists()) {
          workshops.value = Object.entries(workshopsSnapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
        } else {
          console.log('Nenhuma oficina encontrada.');
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    // Chama a função de busca quando o componente é montado
    onMounted(() => {
      fetchData();
    });

    // Função para lidar com o clique na card
    const handleCardClick = (item) => {
      selectedItem.value = item;
      isModalVisible.value = true;
    };

    return {
      exhibitions,
      workshops,
      isModalVisible,
      selectedItem,
      handleCardClick
    };
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.card-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
}

.custom-card {
  width: 300px;
  margin: 10px;
}
</style>
