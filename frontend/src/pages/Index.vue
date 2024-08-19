<template>
  <div class="page">
    <div class="logo">
      <img :src="logo" width="30%" height="30%"/>
    </div>
    <div class="content">
      <h1>Projeto DNA Afetivo: Kame e Kanhru</h1>
      <p>
        O projeto "DNA Afetivo: Kame e Kanhru" é uma iniciativa da Universidade Federal de Santa Maria 
        (UFSM), desenvolvida pela artista Kalinka Mallmann, pelo professor de História Joceli Sirai Sales 
        e pelo Laboratório de Interatividade (LABINTER). O projeto ocorre de maneira colaborativa com a 
        comunidade kaingáng da Terra do Indígena do Guarita km10, localizada no noroeste do estado do 
        Rio Grande do Sul, e com a comunidade kaingáng de Santa Maria.
        O objetivo principal do projeto é a preservação e valorização das práticas culturais e das 
        identidades das comunidades indígenas Kame e Kanhru.
      </p>
      <div class="cards">
        <Box 
          title="Objetivos:"
          :content="objectives"
        />
        <Box 
          title="Metodologia:"
          content="O projeto adota uma abordagem participativa, envolvendo membros das comunidades Kame e Kanhru no processo de coleta e compartilhamento de informações. Utiliza métodos de pesquisa colaborativa para garantir que as representações culturais sejam precisas e respeitosas."
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
        { label: 'Preservação Cultural: ', text: 'O projeto visa documentar e preservar as práticas culturais, histórias e tradições dos povos Kame e Kanhru, promovendo a valorização de suas identidades e saberes.' },
        { label: 'Tecnologia e Cultura: ', text: 'Utiliza tecnologias digitais e de interação para criar ferramentas e plataformas que facilitem a disseminação e o acesso às informações culturais dessas comunidades.' },
        { label: 'Educação e Conscientização: ', text: 'Promove a educação e a conscientização sobre a importância da diversidade cultural e o respeito pelas tradições indígenas.' }
      ],
      results: [
        { text: 'Criação de um banco de dados cultural acessível para pesquisadores e interessados.' },
        { text: 'Desenvolvimento de ferramentas interativas que permitam a exploração e o aprendizado sobre as culturas Kame e Kanhru.' },
        { text: 'Aumento da visibilidade e do respeito pelas tradições e identidades dos povos indígenas.' }
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
