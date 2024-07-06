const express = require('express');
const { db, auth } = require('./firebase-admin');

const app = express();

app.use(express.json());

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await auth.getUserByEmail(email);
    // Lógica de autenticação adicional aqui
    res.json({ message: 'Usuário autenticado', user: userRecord });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
