<template>
  <footer class="footer">
    <div class="container">
      <div class="contact-info">
        <div class="contact-item">
          <h3>Campus Sede:</h3>
          <p>
            Av. Roraima nº 1000<br />
            Cidade Universitária<br />
            Bairro Camobi<br />
            Santa Maria - RS<br />
            CEP: 97105-900<br />
            +55 (55) 3220-8000
          </p>
        </div>
        <div class="contact-item">
          <h3>LABINTER:</h3>
          <p>
            Centro de Artes e Letras, Prédio 40, Sala 1340 A<br />
            Av. Roraima nº 1000<br />
            Bairro Camobi<br />
            Santa Maria – RS<br />
            CEP: 97105-900<br />
            Email: <a :href="'mailto:' + emailLabinter">{{ emailLabinter }}</a><br />
          </p>
        </div>
        <div class="contact-item">
          <h3>Projeto:</h3>
          <p>
            Centro de Artes e Letras, Prédio 40, Sala 1340 A<br />
            Av. Roraima nº 1000, Bairro Camobi, Santa Maria – RS <br />
            Email: <a :href="'mailto:' + emailProject">{{ emailProject }}</a>
          </p>
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
    </div>
  </footer>
</template>

<script>
import { LogoInstagram as Instagram, 
         LogoFacebook as Facebook 
       } from '@vicons/ionicons5';

export default {
  name: 'Footer',
  components: {
    Instagram,
    Facebook,
  },
  data() {
    return {
      emailProject: 'projetodnaakk@gmail.com',
      emailLabinter: 'labinter.ufsm@gmail.com',
      socialMedia: {
        'Facebook': 'https://www.facebook.com/labinterartec',
        'Instagram': 'https://www.instagram.com/labinterufsm/',
      },
      socialIcons: {
        'Facebook': Facebook,
        'Instagram': Instagram,
      }
    };
  }
};
</script>

<style scoped>
.footer {
  background-color: #C4A968;
  padding: 20px;
  border-top: 1px solid #DDDDDD;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.contact-item {
  flex: 1 1 calc(25% - 20px);
  margin: 10px;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
}

.contact-item h3 {
  margin-top: 0;
  font-size: 1.2em;
  color: #333;
}

.contact-item p {
  margin: 5px 0;
}

.contact-item a {
  color: #007BFF;
  text-decoration: none;
}

.contact-item a:hover {
  text-decoration: underline;
}

.note {
  font-size: 0.9em;
  color: #666;
  margin-top: 10px;
}

.social-media {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 15px; 
}

.social-media li {
  display: inline;
}

.social-link {
  display: flex;
  align-items: center;
  color: #007BFF;
  text-decoration: none;
}

.social-icon {
  width: 30px; 
  height: 30px;
  color: #343A40;
}
</style>
