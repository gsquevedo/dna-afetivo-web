<template>
  <div class="card-container">
    <Card
      class="custom-card"
      v-for="item in items"
      :key="item.id"
      :image="item.image"
      :title="item.title"
      :description="item.description"
      :onClick="() => handleCardClick(item.id)"
    />
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  name: 'ActionPage',
  components: {
    Card
  },
  data() {
    return {
      items: [
        { id: 1, image: '/images/project1.jpg', title: 'Projeto Kanyen\'ke', description: 'Um projeto de preservação da língua Kanyen\'ke através de uma plataforma digital interativa.' },
        { id: 2, image: '/images/project2.jpg', title: 'Jogo Xingu', description: 'Um jogo educacional baseado na cultura e tradições do povo Xingu.' },
        { id: 3, image: '/images/project3.jpg', title: 'Artesanato Kayapo', description: 'Plataforma online para promover e vender artesanato produzido pelo povo Kayapo.' },
        { id: 4, image: '/images/project4.jpg', title: 'Histórias Tupinambá', description: 'Aplicativo interativo para contar e preservar histórias tradicionais do povo Tupinambá.' },
        { id: 5, image: '/images/project5.jpg', title: 'Jogo Guarani', description: 'Jogo de realidade aumentada que explora mitos e lendas do povo Guarani.' },
        { id: 6, image: '/images/project6.jpg', title: 'Cultura Yanomami', description: 'Uma série de vídeos educacionais sobre a cultura, história e desafios enfrentados pelo povo Yanomami.' }
      ]
    };
  },
  methods: {
    handleCardClick(id) {
      // Lógica ao clicar no card
      console.log('Card clicado com ID:', id);
    }
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.custom-card {
  width: 300px;
  margin: 10px;
}
</style>
