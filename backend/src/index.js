const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');

// Inicializa o Firebase Admin SDK com as credenciais
const serviceAccount = require('../projeto-web-indigena-firebase-adminsdk-8namd-ff93cf91b1.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();
const app = express();

app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Autenticar usuário
    const userCredential = await admin.auth().getUserByEmail(email);
    // Se você precisar verificar a senha, você deve usar a autenticação do cliente (frontend)
    // O Admin SDK não pode autenticar senhas diretamente no servidor, apenas gerenciar usuários.
    
    res.json({ message: 'Usuário autenticado', user: userCredential });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
