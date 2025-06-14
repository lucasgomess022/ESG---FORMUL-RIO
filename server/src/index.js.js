const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Rota de exemplo
app.get('/api/avaliacoes', async (req, res) => {
  const avaliacoes = await prisma.avaliacao.findMany();
  res.json(avaliacoes);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});