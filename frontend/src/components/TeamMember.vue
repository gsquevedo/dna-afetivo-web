<template>
  <div :class="['team-member', { 'right': isRight, 'left': !isRight }]">
    <div class="photo-container">
      <img :src="photo" alt="Foto do integrante" class="photo"/>
    </div>
    <div class="info">
      <h3>{{ name }}</h3>
      <p><strong>Cargo:</strong> {{ role }}</p>
      <p><strong>Formação Acadêmica:</strong> {{ education }}</p>
      <p><strong>Experiência Profissional:</strong> {{ experience }}</p>
      <p><strong>Principal Contribuição:</strong> {{ contribution }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMember',
  props: {
    name: String,
    role: String,
    education: String,
    experience: String,
    contribution: String,
    photo: String,
    index: Number
  },
  computed: {
    isRight() {
      return this.index % 2 === 0; // Alterna entre 'right' e 'left'
    }
  }
};
</script>

<style scoped>
.team-member {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 20px;
  transition: background-color 0.3s;
}

.team-member.right {
  flex-direction: row; /* Imagem à direita e texto à esquerda */
}

.team-member.left {
  flex-direction: row-reverse; /* Imagem à esquerda e texto à direita */
}

.photo-container {
  flex: 0 0 auto;
}

.photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 20px;
}

.info {
  flex: 1;
}

.info h3 {
  margin-top: 0;
}

.info p {
  margin: 5px 0;
}

.team-member:hover {
  background-color: #f5f5f5;
}
</style>
