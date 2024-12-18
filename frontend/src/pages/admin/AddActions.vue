<template>
  <div class="form-container">
    <h2>BEM-VINDO AO PAINEL DE AÇÕES</h2>
    <div class="form-group">
      <!-- Formulário de Exposição -->
      <div class="form-item">
        <h2>Adicione uma nova exposição</h2>
        <p class="subtitle">Aqui você pode adicionar uma nova exposição, incluindo o título, data, local, descrição, participantes e imagem. A exposição será salva no nosso banco de dados.</p>
        <form @submit.prevent="addExhibition">
          <input v-model="newExhibition.title" placeholder="Título da Exposição" required />
          
          <input v-model="newExhibition.date" type="date" placeholder="Data" required />
          
          <input v-model="newExhibition.location" placeholder="Local" required />
          
          <textarea v-model="newExhibition.description" placeholder="Descrição" required></textarea>

          <input v-model="newExhibition.participants" placeholder="Participantes (Nomes dos Alunos)" required />

          <input type="file" @change="handleExhibitionImageUpload" accept="image/*" />
          
          <button type="submit">Adicionar Exposição</button>
        </form>
      </div>

      <!-- Formulário de Oficina -->
      <div class="form-item">
        <h2>Adicione uma nova oficina</h2>
        <p class="subtitle">Aqui você pode adicionar uma nova oficina, incluindo o título, data, local, descrição, participantes e imagem. A oficina será registrada em nossa plataforma.</p>
        <form @submit.prevent="addWorkshop">
          <input v-model="newWorkshop.title" placeholder="Título da Oficina" required />
          
          <input v-model="newWorkshop.date" type="date" placeholder="Data" required />
          
          <input v-model="newWorkshop.location" placeholder="Local" required />
          
          <textarea v-model="newWorkshop.description" placeholder="Descrição" required />

          <input v-model="newWorkshop.participants" placeholder="Participantes (Nomes dos Alunos)" required />

          <input type="file" @change="handleWorkshopImageUpload" accept="image/*" />
          
          <button type="submit">Adicionar Oficina</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref as dbRef, set } from 'firebase/database';

export default {
  name: 'AddActionPage',
  data() {
    return {
      newExhibition: {
        title: '',
        description: '',
        date: '',
        location: '',
        participants: '',
      },
      newWorkshop: {
        title: '',
        description: '',
        date: '',
        location: '',
        participants: '',
      },
    };
  },
  methods: {
    async addExhibition() {
      const db = this.$database;
      const exhibitionRef = dbRef(db, `exhibitions/${Date.now()}`);

      const exhibitionData = {
        title: this.newExhibition.title,
        description: this.newExhibition.description,
        date: this.newExhibition.date,
        location: this.newExhibition.location,
        participants: this.newExhibition.participants,
      };

      await set(exhibitionRef, exhibitionData);
      alert('Exposição salva com sucesso!');
      this.clearExhibitionForm();
    },

    async addWorkshop() {
      const db = this.$database;
      const workshopRef = dbRef(db, `workshops/${Date.now()}`);

      const workshopData = {
        title: this.newWorkshop.title,
        description: this.newWorkshop.description,
        date: this.newWorkshop.date,
        location: this.newWorkshop.location,
        participants: this.newWorkshop.participants,
      };

      await set(workshopRef, workshopData);
      alert('Oficina salva com sucesso!');
      this.clearWorkshopForm();
    },

    clearExhibitionForm() {
      this.newExhibition.title = '';
      this.newExhibition.description = '';
      this.newExhibition.date = '';
      this.newExhibition.location = '';
      this.newExhibition.participants = '';
    },

    clearWorkshopForm() {
      this.newWorkshop.title = '';
      this.newWorkshop.description = '';
      this.newWorkshop.date = '';
      this.newWorkshop.location = '';
      this.newWorkshop.participants = '';
    }
  },
};
</script>

<style scoped>
.form-container {
  font-family: Arial, sans-serif;
  background-color: #F5F5DC;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

.form-group {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.form-item {
  display: flex;
  flex-direction: column;
  width: 45%;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

.subtitle {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 10px;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

input, textarea {
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

button {
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #45a049;
}

@media (max-width: 768px) {
  .form-item {
    width: 80%;
    max-width: 500px;
    margin: 0 auto;
  }

  .form-group {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
}
</style>
