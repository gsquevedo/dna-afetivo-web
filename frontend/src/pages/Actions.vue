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
import Card from '../components/Card.vue';
import Modal from '../components/Modal.vue';

export default {
  name: 'ActionPage',
  components: {
    Card,
    Modal
  },
  data() {
    return {
      exhibitions: [
        // Exposições
        { id: 1, image: '/images/exhibition1.jpg', title: 'DNA AFETIVO KAMÊ KANHRU', description: 'Tipo: Exposição ARTE E COSMOLOGIAS, Evento: AIR LabInter, Ano: 2021, Instituição Promotora: Universidade Federal de Santa Maria.' },
        { id: 2, image: '/images/exhibition2.jpg', title: 'INH REG RÊ', description: 'Tipo: Exposição coletiva, Local: Hall do CAL UFSM, Ano: 2020, Cidade: Santa Maria, País: Brasil, Instituição Promotora: Universidade Federal de Santa Maria.' },
        { id: 3, image: '/images/exhibition3.jpg', title: 'DNA AFETIVO KAMÊ KANHRU', description: 'Tipo: Exposição Coletiva dos Mestres PPGART/UFSM, Ano: 2018, Local: Hall Planetário UFSM, Cidade: Santa Maria, País: Brasil, Instituição Promotora: Universidade Federal de Santa Maria.' },
        { id: 4, image: '/images/exhibition4.jpg', title: 'DNA AFETIVO KAMÊ KANHRU', description: 'Tipo: Exposição Coletiva Arte. Colaboração. Tecnologia, Ano: 2018, Local: Sala Claúdio Carriconde, Cidade: Santa Maria, País: Brasil, Instituição Promotora: UFSM.' },
        { id: 5, image: '/images/exhibition5.jpg', title: 'DNA AFETIVO KAMÊ KANHRU', description: 'Tipo: Exposição Coletiva Arte. Deslocamento. Tecnologia, Ano: 2017, Local: Sala Claúdio Carriconde, Cidade: Santa Maria, País: Brasil, Instituição Promotora: Universidade Federal de Santa Maria.' },
        { id: 6, image: '/images/exhibition6.jpg', title: 'Compartilhar (Registro Conceitual)', description: 'Tipo: Animação, Autores: Kalinka Mallmann e Joceli Sales, Ano: 2016, Tipo de Exposição: Coletiva Arte. Topologia. Tecnologia, Local: Sala Claúdio Carriconde, Cidade: Santa Maria, País: Brasil, Instituição Promotora: Universidade Federal de Santa Maria.' },
      ],
      workshops: [
        // Oficinas
        { id: 7, image: '/images/workshop1.jpg', title: 'Implementação do Jogo Digital Kaingang', description: 'Local: Escola Municipal de Ensino Fundamental Dom Antonio Reis, Turma: Sextos anos, Cidade: Santa Maria, RS, Ano: 2022.' },
        { id: 8, image: '/images/workshop2.jpg', title: 'Implementação do Jogo Digital Kaingang', description: 'Local: Escola Municipal de Ensino Fundamental Dom Antonio Reis, Turma: Terceiros anos, Cidade: Santa Maria, RS, Ano: 2022.' },
        { id: 9, image: '/images/workshop3.jpg', title: 'Oficina de Criação Sonora para o Jogo Kame Kanhru', description: 'Local: EEIEF Augusto Ope da Silva, Cidade: Santa Maria, RS, Ano: 2022.' },
        { id: 10, image: '/images/workshop4.jpg', title: 'Oficina de Criação Audiovisual e Valores Kaingáng', description: 'Local: Escola EEIEF Augusto Ope da Silva, Cidade: Santa Maria, RS, Ano: 2020.' },
        { id: 11, image: '/images/workshop5.jpg', title: 'Laboratório de Criação: Jogos Digitais Kame Kanhru', description: 'Local: EEIEF Gormecindo Jete Tenh Ribeiro, Cidade: Terra Indígena do Guarita, Tenente Portela, RS, Período: Primeiro semestre de 2019.' },
        { id: 12, image: '/images/workshop6.jpg', title: 'Laboratório de Criação: Jogos Digitais Kame Kanhru', description: 'Local: EEIEF Gormecindo Jete Tenh Ribeiro, Cidade: Terra Indígena do Guarita, Tenente Portela, RS, Período: Segundo semestre de 2019.' },
        { id: 13, image: '/images/workshop7.jpg', title: 'Laboratório de Criação: Mapeamento Afetivo', description: 'Local: EEIEF Gormecindo Jete Tenh Ribeiro, Cidade: Terra Indígena do Guarita, Tenente Portela, RS, Período: Primeiro semestre de 2018.' },
        { id: 14, image: '/images/workshop8.jpg', title: 'Laboratório de Criação: Mapeamento Afetivo', description: 'Local: EEIEF Gormecindo Jete Tenh Ribeiro, Cidade: Terra Indígena do Guarita, Tenente Portela, RS, Período: Segundo semestre de 2017.' },
        { id: 15, image: '/images/workshop9.jpg', title: 'Laboratório de Criação: Desbravando Territórios', description: 'Local: EEIEF Gormecindo Jete Tenh Ribeiro, Cidade: Terra Indígena do Guarita, Tenente Portela, RS, Período: Segundo semestre de 2016.' },
        { id: 16, image: '/images/workshop10.jpg', title: 'Laboratório de Criação: Desenhos Digitais', description: 'Local: EEIEF Gormecindo Jete Tenh Ribeiro, Cidade: Terra Indígena do Guarita, Tenente Portela, RS, Período: Primeiro semestre de 2016.' }
      ],
      isModalVisible: false,
      selectedItem: null
    };
  },
  methods: {
    handleCardClick(item) {
      this.selectedItem = item;
      this.isModalVisible = true;
    }
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
