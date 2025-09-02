const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rotas
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/integrantes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/integrantes.html"));
});
app.get("/componente1", (req, res) => {
  res.sendFile(path.join(__dirname, "public/componente1.html"));
});
app.get("/componente2", (req, res) => {
  res.sendFile(path.join(__dirname, "public/componente2.html"));
});

// Start Render
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

module.exports = app; // Exporta para Vercel
