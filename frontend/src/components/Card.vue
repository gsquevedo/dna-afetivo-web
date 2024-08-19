<template>
  <div class="card">
    <img :src="image" alt="Card image" class="card-image" />
    <div class="card-content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <button @click="handleMoreClick" class="more-button">Saiba Mais</button>
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
      required: true
    }
  },
  methods: {
    handleMoreClick() {
      this.onClick();
    }
  }
};
</script>

<style scoped>
.card {
  background-color: #FFFFFF;
  border: 1px solid #DDDDDD;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  margin: 10px;
  box-sizing: border-box;
  text-align: center;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card h2 {
  margin-top: 0;
  font-size: 1.5em;
}

.card p {
  font-size: 1em;
  color: #666;
  margin-bottom: 15px;
}

.more-button {
  background-color: #C4A968;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.more-button:hover {
  background-color: #B0905D;
}
</style>
