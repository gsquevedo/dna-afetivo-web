<template>
  <div class="page-container">
    <h1>Produtos</h1>
    <p>Bem-vindo à página de produtos. Aqui você encontra os principais materiais do projeto.</p>
    <n-tabs class="tabs-container" v-model:value="activeTab" type="line">
      <!-- Aba Cartilha -->
      <n-tab-pane name="cartilha" tab="Cartilha">
        <h2>Cartilha</h2>
        <p>A cartilha foi desenvolvida como um material educativo.</p>
      </n-tab-pane>

      <!-- Aba Jogo do Tigre -->
      <n-tab-pane name="jogo-do-tigre" tab="Jogo do Tigre">
        <div class="images-container">
          <h3>Imagens do Jogo do Tigre</h3>
          <div class="image-grid">
            <img
              v-for="(image, index) in jogoTigreImages"
              :key="index"
              :src="image.mediaUrl"
              alt="Imagem do Jogo do Tigre"
            />
          </div>
        </div>
      </n-tab-pane>

      <!-- Aba Vídeos -->
      <n-tab-pane name="videos" tab="Vídeos">
        <h2>Vídeos</h2>
        <div class="videos-container">
          <video
            v-for="(video, index) in videoFiles"
            :key="index"
            controls
            class="video-player"
          >
            <source :src="video" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>

          <iframe
            v-for="(video, index) in youtubeVideos"
            :key="index"
            :src="`https://www.youtube.com/embed/${video}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="youtube-player"
          ></iframe>
        </div>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script>
import { getDatabase, ref as dbRef, get } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { NTabs, NTabPane } from 'naive-ui';

export default {
  name: 'ProductsPage',
  components: {
    NTabs,
    NTabPane
  },
  data() {
    return {
      activeTab: 'cartilha',
      jogoTigreImages: [],
      youtubeVideos: ['U-N0DttrAVk', 'RalRxlWdSRE'],
      videoFiles: [],
      user: null,
    };
  },
  mounted() {
    this.fetchProducts();  
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
    async fetchProducts() {
      try {
        const db = getDatabase();
        const productsRef = dbRef(db, 'products');
        const snapshot = await get(productsRef);
        if (snapshot.exists()) {
          const products = snapshot.val();
          console.log('Produtos recuperados:', products);
          this.loadCategoryProducts(products);
        } else {
          console.log('Nenhum produto encontrado.');
        }
      } catch (error) {
        console.error('Erro ao recuperar produtos do Firebase:', error);
      }
    },
    loadCategoryProducts(products) {
      this.jogoTigreImages = [];
      this.videoFiles = [];

      if (products['jogo-do-tigre']) {
        for (const productId in products['jogo-do-tigre']) {
          const product = products['jogo-do-tigre'][productId];
          if (product.mediaUrl) {
            this.jogoTigreImages.push(product);
          }
        }
      }

      if (products['videos']) {
        for (const productId in products['videos']) {
          const product = products['videos'][productId];
          if (product.mediaUrl) {
            this.videoFiles.push(product);
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  max-width: 100%;
  overflow-y: auto;
}

.tabs-container {
  width: 100%;
  box-sizing: border-box;
}

.images-container h3 {
  margin-bottom: 20px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  justify-items: center; 
}

.image-grid img {
  width: 100%;
  max-width: 400px; 
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.videos-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.video-player,
.youtube-player {
  width: 100%;
  max-width: 300px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
  .page-container {
    padding: 10px;
  }

  .video-player,
  .youtube-player {
    max-width: 100%;
  }

  .image-grid {
    grid-template-columns: 1fr;
  }

  .image-grid img {
    max-height: 80%;
    max-width: 80%;
    margin: 0 auto;
  }
}
</style>
