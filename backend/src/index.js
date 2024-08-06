const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const cors = require('cors');

// Inicializa o Firebase Admin SDK com as credenciais
const serviceAccount = require('../projeto-web-indigena-firebase-adminsdk-8namd-9efcd57624.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();

// Configura o CORS
app.use(cors({
  origin: '*',
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type,Authorization',
}));

app.use(bodyParser.json());

// Middleware para verificar o token JWT
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extrai o token do header

  if (token == null) return res.status(401).json({ error: 'Token não fornecido' });

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; // Adiciona o usuário ao request
    next();
  } catch (error) {
    res.status(403).json({ error: 'Token inválido' });
  }
};

// Rota de login protegida com verificação de token
app.post('/login', verifyToken, async (req, res) => {
  const { email } = req.body;

  try {
    // Verifica se o usuário existe
    const userRecord = await admin.auth().getUserByEmail(email);
    res.json({ message: 'Usuário autenticado', user: userRecord });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
