<template>
  <div class="publications-container">
    <h1 class="title">Publicações do Projeto</h1>

    <!-- Artigos Publicados em Periódicos -->
    <section>
      <h2>Artigos Publicados em Periódicos Nacionais e Internacionais</h2>
      <div v-for="(publication, index) in articles" :key="publication.id" 
           :class="['publication-item', { 'bg-image': true }]"
           :style="{ backgroundImage: showImage(index) }">
        <div class="publication-content">
          <h3>{{ publication.title }}</h3>
          <p><strong>Autores:</strong> {{ publication.authors }}</p>
          <p><strong>Periódico:</strong> {{ publication.journal }} ({{ publication.year }})</p>
          <a :href="publication.link" target="_blank">Disponível em: {{ publication.link }}</a>
        </div>
      </div>
    </section>

    <!-- Capítulos de Livros Nacionais e Internacionais -->
    <section>
      <h2>Capítulos de Livros Nacionais e Internacionais</h2>
      <div v-for="(publication, index) in bookChapters" :key="publication.id" 
           :class="['publication-item', { 'bg-image': true }]"
           :style="{ backgroundImage: showImage(index) }">
        <div class="publication-content">
          <h3>{{ publication.title }}</h3>
          <p><strong>Autores:</strong> {{ publication.authors }}</p>
          <p><strong>Livro:</strong> {{ publication.book }} ({{ publication.year }})</p>
          <a :href="publication.link" target="_blank">Disponível em: {{ publication.link }}</a>
        </div>
      </div>
    </section>

    <!-- Dissertação de Mestrado -->
    <section>
      <h2>Dissertação de Mestrado</h2>
      <div v-for="(publication, index) in dissertation" :key="publication.id" 
           :class="['publication-item', { 'bg-image': true }]"
           :style="{ backgroundImage: showImage(index) }">
        <div class="publication-content">
          <h3>{{ publication.title }}</h3>
          <p><strong>Autores:</strong> {{ publication.authors }}</p>
          <p><strong>Instituição:</strong> {{ publication.institution }} ({{ publication.year }})</p>
          <a :href="publication.link" target="_blank">Disponível em: {{ publication.link }}</a>
        </div>
      </div>
    </section>

    <!-- Anais de Eventos Nacionais e Internacionais -->
    <section>
      <h2>Anais de Eventos Nacionais e Internacionais</h2>
      <div v-for="(publication, index) in proceedings" :key="publication.id" 
           :class="['publication-item', { 'bg-image': true }]"
           :style="{ backgroundImage: showImage(index) }">
        <div class="publication-content">
          <h3>{{ publication.title }}</h3>
          <p><strong>Autores:</strong> {{ publication.authors }}</p>
          <p><strong>Evento:</strong> {{ publication.event }} ({{ publication.year }})</p>
          <a :href="publication.link" target="_blank">Disponível em: {{ publication.link }}</a>
        </div>
      </div>
    </section>

    <!-- Resumos Publicados em Anais de Eventos -->
    <section>
      <h2>Resumos Publicados em Anais de Eventos</h2>
      <div v-for="(publication, index) in abstracts" :key="publication.id" 
           :class="['publication-item', { 'bg-image': true }]"
           :style="{ backgroundImage: showImage(index) }">
        <div class="publication-content">
          <h3>{{ publication.title }}</h3>
          <p><strong>Autores:</strong> {{ publication.authors }}</p>
          <p><strong>Evento:</strong> {{ publication.event }} ({{ publication.year }})</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import pescador from "../../assets/personagens/ilustracao pescador.png"
import artesana from "../../assets/personagens/ilustracao artesana.png"

export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "Arte e tecnodiversidade na ativação da cultura indígena kaingang",
          authors: "MALLMANN, Kalinka L.; OLIVEIRA, Andreia M.; SALES, Joceli S.",
          journal: "CUADERNOS DE MUSICA, ARTES VISUALES Y ARTES ESCENICAS",
          year: 2021,
          link: "https://revistas.javeriana.edu.co/files-articulos/MAVAE/16-2%20(2021)/297068066010/",
        },
        {
          id: 2,
          title: "Prática artística em comunidade indígena kaingang: Por uma metodologia colaborativa",
          authors: "MALLMANN, Kalinka L.; OLIVEIRA, Andreia M.; PEREIRA, Marcelo E. S.",
          journal: "Pós: Revista do Programa de Pós-graduação em Artes da Escola de Belas Artes da UFMG",
          year: 2019,
          link: "https://periodicos.ufmg.br/index.php/revistapos/article/view/16119#:~:text=Resumo,como%20essas%20pr%C3%A1ticas%20se%20constituem.",
        },
        {
          id: 3,
          title: "DNA afetivo kamê e kanhru: Concepção de uma prática colaborativa em uma comunidade Kaingang",
          authors: "MALLMANN, Kalinka L.; SALES, J. S.; OLIVEIRA, A. M.",
          journal: "REBENTO: REVISTA DAS ARTES DO ESPETÁCULO",
          year: 2018,
          link: "https://www.periodicos.ia.unesp.br/index.php/rebento/article/view/279",
        },
      ],
      bookChapters: [
        {
          id: 1,
          title: "DNA afetivo Kamê e Kanhru",
          authors: "MALLMANN, Kalinka; OLIVEIRA, Andreia",
          book: "Hiperorgânicos – Reconexões Ancestrofuturistas",
          year: 2021,
          link: "https://www.editorafi.org/87educomunicativas#:~:text=O%20livro%20Media%C3%A7%C3%B5es%20educomunicativas%20e,educativa%20e%20da%20arte%20comunit%C3%A1ria.",
        },
        {
          id: 2,
          title: "Práticas colaborativas em comunidades no âmbito da arte e da tecnologia",
          authors: "OLIVEIRA, A. M.; MALLMANN, Kalinka. L.",
          book: "Mediações educomunicativas e interculturais entre Brasil e Moçambique",
          year: 2020,
          link: "https://www.editorafi.org/87educomunicativas#:~:text=O%20livro%20Media%C3%A7%C3%B5es%20educomunicativas%20e,educativa%20e%20da%20arte%20comunit%C3%A1ria.",
        },
      ],
      dissertation: [
        {
          id: 1,
          title: "DNA Afetivo Kamê e Kanhru – Prática artística colaborativa em comunidade kaingáng",
          authors: "MALLMANN, Kalinka",
          institution: "Universidade Federal de Santa Maria (UFSM)",
          year: 2018,
          link: "https://repositorio.ufsm.br/bitstream/handle/1/15763/DIS_PPGAV_2018_MALLMANN_KALINKA.pdf?sequence=1&amp;isAllowed=y&gt",
        },
      ],
      proceedings: [
        {
          id: 1,
          title: "Ações colaborativas em Arte e Tecnologia pela ativação dos modos culturais específicos da Cultura Indígena Kaingáng",
          authors: "OLIVEIRA, A. M.; MALLMANN, K. L.; SALES, J. S.; et al.",
          event: "VIII Simpósio Internacional de Inovação em Mídias Interativas",
          year: 2021,
          link: "https://files.cercomp.ufg.br/weby/up/777/o/_Andreia_Oliveira_et_al_2021_-_13.pdf",
        },
        {
          id: 2,
          title: "Arte, Colaboração e Tecnologia – O Projeto DNA AKK e a criação de contexto de ativação cultural",
          authors: "MALLMANN, K. L.; HILDEBRAND, H. R.; OLIVEIRA, A. M.",
          event: "30º Encontro Nacional da ANPAP (RE)EXISTÊNCIAS",
          year: 2021,
          link: "https://www.even3.com.br/anais/30enanpap2021/383926-arte-colaboracao-e-tecnologia–o-projeto-dna-akk-e-a-criacao-de-contexto-de-ativacao-cultural/",
        },
      ],
      abstracts: [
        {
          id: 1,
          title: "O game Kamê Kanhru – As tecnologias em arte digital imbricadas às culturas minoritárias",
          authors: "MALLMANN, Kalinka; OLIVEIRA, A. M.; SALES, J. S.; Gottlieb Bruno; BALDUINO, E.",
          event: "7º Congresso Internacional de Arte, Ciência e Tecnologia e Seminário de Artes Digitais",
          year: 2022,
        },
        {
          id: 2,
          title: "Práticas de colaboração em Arte e Tecnologia",
          authors: "MALLMANN, K. L., et. al.",
          event: "35ª Jornada Acadêmica Integrada",
          year: 2020,
        },
      ],
      backgroundImages: [
        artesana,
        pescador
      ],
    };
  },
  methods: {
    showImage(index) {
      return index % 2 === 0 ? `url(${this.backgroundImages[0]})` : `url(${this.backgroundImages[1]})`;
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding-bottom: 15px;
}

.publication-content {
  position: relative;
  width: 80%;
  z-index: 2; 
  background-color: rgba(255, 255, 255, 0.8);
  padding: 15px;
  border-radius: 5px;
}

.publications-container {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  position: relative;
}

h1 {
  text-align: center;
  color: #333;
}

section {
  margin-bottom: 40px;
}

h2 {
  color: #2F4858;
  margin-bottom: 20px;
}

.publication-item {
  background-color: #fff;
  border: 1px solid #C4A968;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
}

.bg-image {
  background-size: 150px;
  background-position: right;
  background-repeat: no-repeat;
}

h3 {
  font-size: 18px;
  color: #2E8B57;
  margin-bottom: 10px;
}

p {
  margin: 5px 0;
  font-size: 14px;
  color: #555;
}

a {
  color: #1E90FF;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .publications-container {
    padding: 10px;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 16px;
  }

  p {
    font-size: 12px;
  }
}
</style>