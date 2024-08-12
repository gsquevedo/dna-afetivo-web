<template>
  <div class="team-member">
    <img :src="photo" alt="Foto do integrante" class="photo"/>
    <div class="info">
      <h3>{{ name }}</h3>
      <p>{{ role }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMember',
  props: {
    name: String,
    role: String,
    description: String,
    photo: String
  }
};
</script>

<style scoped>
.team-member {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 15px;
}

.photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 15px;
}

.info {
  flex: 1;
}
</style>
