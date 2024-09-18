<template>
  <div class="page">
    <form @submit.prevent="login" class="formLogin">
      <h1>Login</h1>
      <p>Digite os seus dados de acesso no campo abaixo.</p>
      <label for="email">E-mail</label>
      <input type="email" v-model="email" placeholder="Digite seu e-mail" autofocus required />
      <label for="password">Senha</label>
      <input type="password" v-model="password" placeholder="Digite sua senha" required />
      <a href="/">Esqueci minha senha</a>
      <input type="submit" value="Acessar" class="btn" />
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNuxtApp, useRouter } from '#app';

const { $auth, $signInWithEmailAndPassword } = useNuxtApp();
const router = useRouter();

const email = ref('');
const password = ref('');
const errorMessage = ref(null);

const login = async () => {
  try {
    // Autentica o usuário com Firebase
    const userCredential = await $signInWithEmailAndPassword($auth, email.value, password.value);
    const user = userCredential.user;

    // Obtém o token JWT
    const token = await user.getIdToken();

    // Envia o token JWT para o backend
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email.value })
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Login bem-sucedido:', data);
      // Redirecionar ou armazenar dados do usuário, se necessário
      router.push('/admin/')
    } else {
      errorMessage.value = data.error || 'Erro ao fazer login.';
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    errorMessage.value = 'Erro ao fazer login. Verifique suas credenciais.';
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  color: #023047;
}

.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  /* background-color: #480ca8; */
}

.formLogin {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 7px;
  padding: 40px;
  box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
  gap: 5px;
}

.formLogin h1 {
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 2.3em;
}

.formLogin p {
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
}

.formLogin input {
  padding: 15px;
  font-size: 14px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  margin-top: 5px;
  border-radius: 4px;
  transition: all linear 160ms;
  outline: none;
}

.formLogin input:focus {
  /* border: 1px solid #f72585; */
}

.formLogin label {
  font-size: 14px;
  font-weight: 600;
}

.formLogin a {
  margin-bottom: 20px;
  font-size: 13px;
  color: #555;
  transition: all linear 160ms;
}

.formLogin a:hover {
  /* color: #f72585; */
}

.btn {
  background-color: #D96459;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: none;
  transition: all linear 160ms;
  cursor: pointer;
}

.btn:hover {
  transform: scale(1.05);
  background-color: #D96459;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
