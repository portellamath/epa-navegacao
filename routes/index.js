const express = require('express');
const router = express.Router();

// Integrantes (com as fotos já incluídas em public/images/integrantes)
const integrantes = [
  { nome: 'Matheus de Melo Portella', img: '/images/integrantes/matheus_portella.jpg' },
  { nome: 'Vinicius Samuel Tibo', img: '/images/integrantes/vinicius_tibo.jpg' },
];

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/integrantes', (req, res) => {
  res.render('integrantes', { integrantes });
});

router.get('/componente1', (req, res) => {
  res.render('componente1');
});

router.get('/componente2', (req, res) => {
  res.render('componente2');
});

module.exports = router;
