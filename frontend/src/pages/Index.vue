<template>
  <div class="page">
    <div class="logo">
      <img :src="logo" width="30%" height="30%"/>
    </div>
    <div class="content">
      <h1>Projeto DNA Afetivo: Kame e Kanhru</h1>
      <p>
        O projeto "DNA Afetivo: Kamê e Kanhru" é uma iniciativa da Universidade Federal de Santa Maria 
        (UFSM), idealizada (em 2016) pela artista Kalinka Mallmann e pelo professor de História, 
        indígena Kaingáng, Joceli Sirai Sales. Desenvolvida pelo Laboratório de Interatividade (LABINTER) 
        com a comunidades Kaingáng  Terra do Indígena do Guarita km10, localizada no noroeste do estado 
        do Rio Grande do Sul, e com a comunidade Kaingáng de Santa Maria, Três Soitas. O objetivo 
        principal do projeto é a preservação e valorização das práticas culturais Kaingáng 
        em meio às tecnologias emergentes. Além de fomentar o protagonismo das comunidades 
        participantes.
      </p>
      <div class="cards">
        <Box 
          title="Objetivos:"
          :content="objectives"
        />
        <Box 
          title="Metodologia:"
          content="O projeto é realizado por meio de uma metodologia colaborativa em arte, que integra práticas artísticas e pedagógicas no interior das comunidades participantes."
        />
        <Box 
          title="Resultados Esperados:"
          :content="results"
        />
        <Box 
          title="Importância:"
          content="O projeto é uma contribuição significativa para a preservação e promoção das culturas indígenas, utilizando tecnologias modernas para apoiar a transmissão de saberes tradicionais e fomentar o respeito pela diversidade cultural."
        />
      </div>
      <div class="team">
        <h2>Integrantes do Projeto</h2>
        <TeamMember 
          v-for="(member, index) in teamMembers"
          :key="member.name"
          :name="member.name"
          :role="member.role"
          :education="member.education"
          :experience="member.experience"
          :contribution="member.contribution"
          :photo="member.photo"
          :index="index"
        />
      </div>
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>
import logo from "../../assets/logo.png"
import Box from "../components/Box.vue"
import Footer from "../components/Footer.vue"
import TeamMember from "../components/TeamMember.vue"
import image from "../../assets/perfil.jpeg"

export default {
  name: 'IndexPage',
  components: {
    Box,
    Footer,
    TeamMember
  },
  data() {
    return {
      logo,
      objectives: [
        { label: 'Preservação Cultural: ', text: 'O projeto visa documentar e preservar as práticas culturais, histórias e tradições do povo Kaingáng, promovendo a valorização de suas identidades e saberes.' },
        { label: 'Tecnologia e Cultura: ', text: 'Utiliza tecnologias digitais e de interação para criar ferramentas e plataformas que dialoguem com a demanda local das comunidades participantes.' },
        { label: 'Educação e Conscientização: ', text: 'Promove a educação tecnológica  e a conscientização sobre a importância da diversidade cultural e o respeito pelas tradições indígenas.' }
      ],
      results: [
        { text: 'Desenvolvimento de ferramentas interativas que permitam o aprendizado sobre a cultura Kaingáng.' },
        { text: 'Ativação do idioma Kaingáng e da concepção cosmológica Kamê e Kanhru por meio das tecnologias emergentes em arte.' },
        { text: 'Gerar protagonismo das comunidades indígenas e capacitação tecnológica.' },
        { text: 'Aumento da visibilidade e do respeito pelas tradições e identidades dos povos indígenas. em geral.' },
        { text: 'Criação de um banco de dados cultural acessível para pesquisadores e interessados.' }
      ],
      teamMembers: [
        { name: 'Kalinka Mallmann', role: 'Artista', description: 'Responsável pelo desenvolvimento artístico do projeto.', photo: image },
        { name: 'Joceli Sirai Sales', role: 'Professor de História', description: 'Contribui com o conhecimento histórico e cultural.', photo: image },
      ]
    }
  }
};
</script>

<style scoped>
.page {
  width: auto;
  height: auto;
  background-color: #F5F5DC;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  padding: 0 40px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 10px;
  width: 100%;
  max-width: 1200px; 
}

.team {
  margin-top: 40px;
  width: 100%;
  max-width: 1200px;
}

.footer {
  margin-top: 10px;
}
</style>
