const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// armazenamento em memória (exemplo inicial)
const usuarios = [
  { id: uuidv4(), nome: 'Ana Silva', email: 'ana@ex.com', telefone: '11 99999-0000' },
  { id: uuidv4(), nome: 'João Souza', email: 'joao@ex.com', telefone: '11 98888-0000' }
];

// listar
router.get('/', (req, res) => {
  res.render('usuarios/list', { usuarios });
});

// formulário add
router.get('/add', (req, res) => {
  res.render('usuarios/add');
});

// criar (POST)
router.post('/add', (req, res) => {
  const { nome, email, telefone } = req.body;
  usuarios.push({ id: uuidv4(), nome, email, telefone });
  res.redirect('/usuarios');
});

// mostrar
router.get('/:id', (req, res) => {
  const user = usuarios.find(u => u.id === req.params.id);
  if(!user) return res.status(404).send('Usuário não encontrado');
  res.render('usuarios/show', { user });
});

// editar (form)
router.get('/:id/edit', (req, res) => {
  const user = usuarios.find(u => u.id === req.params.id);
  if(!user) return res.status(404).send('Usuário não encontrado');
  res.render('usuarios/add', { user });
});

// atualizar (POST)
router.post('/:id/edit', (req, res) => {
  const idx = usuarios.findIndex(u => u.id === req.params.id);
  if(idx === -1) return res.status(404).send('Usuário não encontrado');
  const { nome, email, telefone } = req.body;
  usuarios[idx] = { id: usuarios[idx].id, nome, email, telefone };
  res.redirect('/usuarios');
});

// deletar
router.post('/:id/delete', (req, res) => {
  const idx = usuarios.findIndex(u => u.id === req.params.id);
  if(idx !== -1) usuarios.splice(idx, 1);
  res.redirect('/usuarios');
});

module.exports = router;
