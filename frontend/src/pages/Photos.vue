<template>
  <div class="album-container">
    <h1>Álbum de Fotos</h1>
    <div class="album">
      <div v-for="(image, index) in images" :key="index" class="album-item">
        <img :src="image" :alt="'Imagem ' + (index + 1)" />
      </div>
    </div>
  </div>
</template>

<script>
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

export default {
  name: "PhotosPage",
  data() {
    return {
      images: [],
    };
  },
  created() {
    this.loadImages();
  },
  methods: {
    async loadImages() {
      const storage = getStorage();
      const storageRef = ref(storage, "photos/");
      try {
        const result = await listAll(storageRef);
        const imageUrls = await Promise.all(
          result.items.map((item) => getDownloadURL(item))
        );
        this.images = imageUrls;
      } catch (error) {
        console.error("Erro ao carregar as imagens:", error);
      }
    },
  },
};
</script>

<style scoped>
.album-container {
  text-align: center;
  padding: 20px;
  max-width: 1200px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
}

h1 {
  color: #333;
  margin-bottom: 30px;
  font-size: 2rem;
}

.album {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}

.album-item {
  background-color: #f0f8ff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.album-item:hover {
  transform: scale(1.05);
}

.album-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
}

@media (max-width: 600px) {
  .album {
    grid-template-columns: 1fr;
  }
}
</style>
