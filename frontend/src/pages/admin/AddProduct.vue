<template>
  <div class="add-product">
    <!-- Welcome Section -->
    <div class="welcome-section">
      <h1>Bem-vindo ao Painel de Administração</h1>
      <p class="subtitle">Aqui você pode adicionar os novos produtos desenvolvidos pelo Projeto DNA Afetivo.</p>
      <p v-if="user" class="welcome-message">Olá, <strong>{{ user.email }}</strong>! Estamos felizes em tê-lo de volta.</p>
    </div>

    <!-- Product Form Section -->
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
          <input type="file" ref="fileInput" @change="onImageChange" accept="image/*,video/*" />
        </div>

        <button type="submit">Salvar Produto</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref as dbRef, set } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'AddProduct',
  data() {
    return {
      user: null,
      newProduct: {
        name: '',
        description: '',
        category: 'cartilha',
      },
      imageUrl: '',
      selectedFile: null,
    };
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        this.user = currentUser;
      } else {
        this.user = null;
      }
    });
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
          const fileRef = storageRef(storage, `products/${this.newProduct.category}/${Date.now()}_${file.name}`);

          const snapshot = await uploadBytes(fileRef, file);
          const downloadURL = await getDownloadURL(snapshot.ref); 

          this.imageUrl = downloadURL; 
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

      // Limpar o campo de input de arquivo
      const fileInput = this.$refs.fileInput;
      if (fileInput) {
        fileInput.value = '';
      }
    },
  },
};
</script>

<style scoped>
.add-product {
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 0;
}

.welcome-section {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 20px;
}

.welcome-message {
  font-size: 1.1rem;
  color: #2ecc71;
}

.form-section {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 700px;
}

form div {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1rem;
}

input,
textarea,
select {
  width: 100%;
  padding: 12px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

textarea {
  height: 120px;
}

button {
  padding: 12px 20px;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #2ecc71;
}
</style>
