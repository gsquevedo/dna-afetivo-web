<template>
  <div class="publications-container">
    <h1 class="title">Publicações do Projeto</h1>

    <!-- Artigos -->
    <section v-if="articles.length > 0">
      <h2>Artigos Publicados</h2>
      <div v-for="(publication, index) in articles" :key="publication.id" class="publication-item">
        <div v-if="publication.imageUrl" :style="{ backgroundImage: 'url(' + publication.imageUrl + ')' }" class="publication-image"></div>
        <div class="publication-content">
          <h3>{{ publication.title }}</h3>
          <p><strong>Autores:</strong> {{ publication.authors }}</p>
          <p><strong>Periódico:</strong> {{ publication.journal }} ({{ publication.year }})</p>
          <a :href="publication.url" target="_blank">Leia mais</a>
        </div>
      </div>
    </section>

    <!-- Capítulos de Livros -->
    <section v-if="bookChapters.length > 0">
      <h2>Capítulos de Livros</h2>
      <div v-for="(publication, index) in bookChapters" :key="publication.id" class="publication-item">
        <div v-if="publication.imageUrl" :style="{ backgroundImage: 'url(' + publication.imageUrl + ')' }" class="publication-image"></div>
        <div class="publication-content">
          <h3>{{ publication.title }}</h3>
          <p><strong>Autores:</strong> {{ publication.authors }}</p>
          <p><strong>Livro:</strong> {{ publication.journal }} ({{ publication.year }})</p>
          <a :href="publication.url" target="_blank">Leia mais</a>
        </div>
      </div>
    </section>

    <!-- Outros Tipos de Publicações -->
    <section v-if="otherTypes.length > 0">
      <h2>Outras Publicações</h2>
      <div v-for="(publication, index) in otherTypes" :key="publication.id" class="publication-item">
        <div v-if="publication.imageUrl" :style="{ backgroundImage: 'url(' + publication.imageUrl + ')' }" class="publication-image"></div>
        <div class="publication-content">
          <h3>{{ publication.title }}</h3>
          <p><strong>Autores:</strong> {{ publication.authors }}</p>
          <p><strong>Tipo:</strong> {{ publication.type }} ({{ publication.year }})</p>
          <a :href="publication.url" target="_blank">Leia mais</a>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { db } from "firebase/database";

export default {
  data() {
    return {
      publications: [],
      articles: [],
      bookChapters: [],
      otherTypes: [], 
    };
  },
  mounted() {
    this.fetchPublications();
  },
  methods: {
    fetchPublications() {
      db.ref('publications').once('value')
        .then(snapshot => {
          const data = snapshot.val();
          const publicationsArray = [];
          
          // Organizando os dados por tipo
          for (let id in data) {
            const pub = { id, ...data[id] };
            publicationsArray.push(pub);

            // Dividir as publicações pelo tipo
            if (pub.type === 'article') {
              this.articles.push(pub);
            } else if (pub.type === 'book-chapter') {
              this.bookChapters.push(pub);
            } else {
              this.otherTypes.push(pub);
            }
          }
        })
        .catch(error => {
          console.error("Erro ao recuperar publicações: ", error);
        });
    },
  },
};
</script>

<style scoped>
.publications-container{
  width: 100%;
  height: 100%;
}

.publication-item {
  margin-bottom: 20px;
}

.publication-image {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
}

.publication-content {
  padding: 10px;
}

.publication-content h3 {
  font-size: 1.2em;
}

.publication-content p {
  font-size: 1em;
}

.publication-content a {
  font-size: 1em;
  color: #0066cc;
  text-decoration: none;
}

.publication-content a:hover {
  text-decoration: underline;
}
</style>
