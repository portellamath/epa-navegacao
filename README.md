# epa-navegacao

Projeto pronto com Node.js + Express + EJS. Este pacote já inclui as fotos que você enviou (Matheus e Vinicius) dentro de `public/images/integrantes/`.

## Como usar localmente

1. Descompacte o arquivo (se necessário) e entre na pasta:
```
cd epa-navegacao
```

2. Instale dependências:
```
npm install
```

3. Rode o servidor:
```
npm start
```

4. Abra no navegador:
http://localhost:3000

## O que está incluído
- Rotas e views EJS completas (Sobre, Integrantes, Componente1, Componente2, Usuários CRUD em memória).
- Imagens: suas fotos foram adicionadas em `public/images/integrantes/` como `matheus_portella.jpg` e `vinicius_tibo.jpg`.
- 4 imagens placeholder (flaticon1.png, flaticon2.png, logo-epa.png, integrante3.png) geradas automaticamente.
- O projeto usa persistência em memória (os usuários são salvos apenas enquanto o servidor roda).

## Observações
- Substitua o iframe do Google Maps no arquivo `views/partials/footer.ejs` pelo embed real da Etec Itu se desejar (procure o lugar e cole o `src` do iframe).
- Se quiser deploy, recomendo Render (suporta Express + EJS sem ajustes).

Bom trabalho — se quiser, eu: 
- crio o repositório GitHub com `git` commands prontos, ou
- subo para Render/Vercel (você me concede o acesso ao repositório).