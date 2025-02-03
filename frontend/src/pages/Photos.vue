<template>
  <div class="album-container">
    <h1>Álbum de Fotos</h1>
    <div class="album">
      <div v-for="(image, index) in images" :key="index" class="album-item">
        <img :src="`/images/${image}`" :alt="'Imagem ' + (index + 1)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotosPage',
  data() {
    return {
      images: [],
    };
  },
  created() {
    this.loadImages();
  },
  methods: {
    loadImages() {
      this.images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
      ];
    },
  },
};
</script>

<style scoped>
.album-container {
  text-align: center;
  padding: 20px;
  width: 100vw;
  height: 100vh;
}

h1 {
  color: #333;
  margin-bottom: 30px;
}

.album {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  gap: 15px;
  padding: 10px;
}

.album-item {
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.album-item img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

@media (max-width: 600px) {
  .album {
    grid-template-columns: 1fr; 
  }
}
</style>
