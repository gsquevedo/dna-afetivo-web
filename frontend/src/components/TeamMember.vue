<template>
  <div :class="['team-member', { 'right': isRight, 'left': !isRight }]">
    <div class="photo-container">
      <img :src="photo" alt="Foto do integrante" class="photo"/>
    </div>
    <div class="info">
      <h3>{{ name }}</h3>
      <p><strong>Cargo:</strong> {{ role }}</p>
      <p><strong>Formação Acadêmica:</strong> {{ education }}</p>
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
      return this.index % 2 === 0;
    }
  }
};
</script>

<style scoped>
.team-member {
  display: flex;
  align-items: center;
  border: 1px solid rgba(221, 221, 221, 0.5); 
  padding: 20px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5); 
  margin-bottom: 20px;
  transition: background-color 0.3s;
  width: 75%;
}

.team-member.right {
  flex-direction: row;
}

.team-member.left {
  flex-direction: row-reverse; 
}

.photo-container {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.info {
  flex: 1;
  margin-left: 10px;
}

.team-member.left .info {
  margin-left: 0;
  margin-right: 10px;
}

.info h3 {
  margin-top: 0;
}

.info p {
  margin: 5px 0;
}

</style>
