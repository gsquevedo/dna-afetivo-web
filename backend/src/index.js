// backend/src/index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Exemplo de rota
app.get('/api/users', (req, res) => {
  res.json({ users: [] }); // Implemente a lógica para retornar os usuários do banco de dados
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
