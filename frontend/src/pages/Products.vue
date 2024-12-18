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
              :src="image"
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
import { NTabs, NTabPane } from 'naive-ui';
import image1 from '@/assets/jogotigre/peças costas.jpg';
import image2 from '@/assets/jogotigre/Peças frente.jpg';
import image3 from '@/assets/jogotigre/Regras.jpg';
import image4 from '@/assets/jogotigre/Tabuleiro.jpg';
import video1 from '@/assets/videos/video-tigre-mini.mp4';
import video2 from '@/assets/videos/tigre-mini.mp4';
import video3 from '@/assets/videos/kaingang.mp4';
import video4 from '@/assets/videos/portugues.mp4';

export default {
  name: 'ProductsPage',
  components: {
    NTabs,
    NTabPane
  },
  data() {
    return {
      activeTab: 'cartilha',
      jogoTigreImages: [
        image1,
        image2,
        image3,
        image4
      ],
      youtubeVideos: ['U-N0DttrAVk', 'RalRxlWdSRE'],
      videoFiles: [video1, video2, video3, video4],
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
  min-height: 100vh;
  width: 100%;
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
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.image-grid img {
  width: 100%;
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
    max-width: 60%; 
    margin: 0 auto;
  }
}

</style>
