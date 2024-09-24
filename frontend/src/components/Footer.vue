<template>
  <footer class="footer">
    <div class="container">
      <div class="contact-info">
        <div class="contact-item">
          <h3>Campus Sede:</h3>
          <p>Av. Roraima nº 1000, Cidade Universitária, Bairro Camobi,Santa Maria - RS</p>
          <p>CEP: 97105-900</p>
        </div>
        <div class="contact-item">
          <h3>LabInter:</h3>
          <p>Centro de Artes e Letras, Prédio 40, Sala 1340 A </p>
          <p>Av. Roraima nº 1000, Bairro Camobi, Santa Maria – RS </p>
          <p>CEP: 97105-900</p>
          <p>
            Email: <span class="email-link">{{ emailLabinter }}</span>
          </p>
        </div>
        <div class="contact-item">
          <h3>Projeto:</h3>
          <p>Centro de Artes e Letras, Prédio 40, Sala 1340 A</p>
          <p>Av. Roraima nº 1000, Bairro Camobi, Santa Maria – RS</p>
          <p>Email: <span class="email-link">{{ emailProject }}</span></p>
        </div>
        <div class="contact-item" v-if="socialMedia">
          <h3>Redes Sociais:</h3>
          <ul class="social-media">
            <li v-for="(link, name) in socialMedia" :key="name">
              <a :href="link" target="_blank" class="social-link">
                <component :is="socialIcons[name]" class="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} LabInter - Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { LogoInstagram as Instagram, 
         LogoFacebook as Facebook,
         LogoYoutube as Youtube
        } from '@vicons/ionicons5';

export default {
  name: 'Footer',
  components: {
    Instagram,
    Facebook,
    Youtube
  },
  data() {
    return {
      emailProject: 'projetodnaakk@gmail.com',
      emailLabinter: 'labinter.ufsm@gmail.com',
      socialMedia: {
        'Facebook': 'https://www.facebook.com/labinterartec',
        'Instagram': 'https://www.instagram.com/labinterufsm/',
        'Youtube': 'https://www.youtube.com/@dnaafetivo6427'
      },
      socialIcons: {
        'Facebook': Facebook,
        'Instagram': Instagram,
        'Youtube': Youtube
      }
    };
  }
};
</script>

<style scoped>
.footer {
  background-color: #C4A968;
  padding: 20px 10px;
  border-top: 1px solid #c4a968;
  font-family: 'Arial', sans-serif;
  background-image: url('../../../frontend/assets/personagens/menina kame.png'),
                    url('../../../frontend/assets/personagens/menina kahnru.png');
  background-size: 10% 50%;
  background-repeat: no-repeat;
  background-position: right bottom, left bottom; 
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: nowrap;
}

.contact-item {
  flex: 1 1 calc(25% - 20px);
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.contact-item h3 {
  margin-top: 0;
  font-size: 1.5em;
  color: #7A5C41;
  margin-bottom: 15px;
}

.contact-item p {
  margin: 5px 0;
  color: #FFF;
  font-size: 1.1em;
}

.email-link:hover {
  text-decoration: underline;
  color: #1ABC9C;
}

.social-media {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ECF0F1;
  color: #2C3E50;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.social-link:hover {
  background-color: #16A085;
  color: #FFF;
}

.social-icon {
  width: 24px; 
  height: 24px;
}

.footer-bottom {
  color: #FFF;
  text-align: center;
}
</style>
