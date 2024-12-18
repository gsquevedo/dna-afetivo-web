<template>
  <div class="upload-container">
    <h1>Adicionar Nova Foto ao Álbum</h1>
    <div class="form-section">
      <form @submit.prevent="handleUpload">
        <input type="file" @change="handleFileChange" accept="image/*" required />
        <input v-model="photoYear" type="number" placeholder="Ano" required />
        <input v-model="photoProject" type="text" placeholder="Projeto" required />
        <textarea v-model="photoCaption" placeholder="Legenda curta" required></textarea>
        <button type="submit">Adicionar foto</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddNewPhoto',
  data() {
    return {
      selectedFile: null,
      photoYear: '',
      photoProject: '',
      photoCaption: '',
    };
  }
};
</script>

<style scoped>
.upload-container {
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

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input,
textarea {
  padding: 10px;
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

.form-section {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 70%;
}

button:hover {
  background-color: #45a049;
}
</style>
