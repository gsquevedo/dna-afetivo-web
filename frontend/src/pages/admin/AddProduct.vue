<template>
  <div class="add-product">
    <h2>BEM-VINDO AO PAINEL DE PRODUTOS</h2>
    <div class="form-section">
      <form @submit.prevent="handleSave">
        <div>
          <label for="name">Nome do Produto</label>
          <input type="text" v-model="newProduct.name" id="name" required />
        </div>

        <div>
          <label for="description">Descrição</label>
          <textarea v-model="newProduct.description" id="description" required></textarea>
        </div>

        <div>
          <label for="category">Categoria</label>
          <select v-model="newProduct.category" id="category">
            <option value="cartilha">Cartilha</option>
            <option value="jogo-do-tigre">Jogo do Tigre</option>
            <option value="videos">Vídeos</option>
          </select>
        </div>

        <div>
          <label for="file">Upload de Arquivo (Imagem ou Vídeo)</label>
          <input type="file" @change="onImageChange" accept="image/*,video/*" />
        </div>

        <button type="submit">Salvar Produto</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref as dbRef, set } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

export default {
  name: 'AddProduct',
  data() {
    return {
      newProduct: {
        name: '',
        description: '',
        category: 'cartilha', 
      },
      imageUrl: '',
      selectedFile: null, 
    };
  },
  methods: {
    async handleSave() {
      try {
        const db = this.$database;
        const productRef = dbRef(db, `products/${this.newProduct.category}/${Date.now()}`);

        const productData = {
          name: this.newProduct.name,
          description: this.newProduct.description,
          category: this.newProduct.category,
          mediaUrl: this.imageUrl,
        };

        await set(productRef, productData);
        alert('Produto salvo com sucesso!');
        this.clearForm();
      } catch (error) {
        console.error('Erro ao salvar o produto no Firebase:', error);
        alert('Erro ao salvar o produto!');
      }
    },

    async onImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        try {
          const storage = getStorage();
          const fileRef = storageRef(storage, `uploads/${Date.now()}_${file.name}`);

          const snapshot = await uploadBytes(fileRef, file);
          const downloadURL = await getDownloadURL(snapshot.ref);

          this.imageUrl = downloadURL;
          console.log('URL do arquivo:', downloadURL);
        } catch (error) {
          console.error('Erro ao fazer upload do arquivo:', error);
          alert('Erro ao fazer upload do arquivo!');
        }
      }
    },

    clearForm() {
      this.newProduct = {
        name: '',
        description: '',
        category: 'cartilha',
      };
      this.imageUrl = '';
      this.selectedFile = null;
    },
  },
};
</script>

<style scoped>
.add-product {
  font-family: Arial, sans-serif;
  background-color: #F5F5DC;
  width: auto;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

h1 {
  text-align: center;
}

.form-section {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 70%;
}

form div {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

input,
textarea,
select {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

textarea {
  height: 100px;
}

button {
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
