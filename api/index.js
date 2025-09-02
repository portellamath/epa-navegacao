const express = require("express");
const path = require("path");
const app = express();

// Configurar pasta estática
app.use(express.static(path.join(__dirname, "../public")));

// Rotas simples
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/sobre", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/sobre.html"));
});

app.get("/integrantes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/integrantes.html"));
});

// Exporta o app (padrão Vercel)
module.exports = app;
