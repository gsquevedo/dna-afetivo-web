<template>
  <div class="card">
    <img :src="image" alt="" class="card-image" />
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <p class="card-description">{{ description }}</p>
      <button @click="onClick" class="card-button">Saiba Mais</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 1rem;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: auto;
}

.card-body {
  padding: 1rem;
}

.card-title {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}

.card-description {
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0;
}

.card-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.card-button:hover {
  background-color: #0056b3;
}
</style>
