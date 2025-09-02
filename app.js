// app.js - configuração principal do Express
const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/index');
const usuariosRoutes = require('./routes/usuarios');

const app = express();

// configurações de view - EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public'))); // arquivos estáticos (css, imagens, js)

// rotas
app.use('/', indexRoutes);
app.use('/usuarios', usuariosRoutes);

// rota 404 simples
app.use((req, res) => {
  res.status(404).render('404', { url: req.url });
});

// start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App rodando na porta ${PORT}`);
});
