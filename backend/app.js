const Express = require("express");
const app = Express();

// importação de um carinha para tratar erros de validação no backend
const { errors } = require("celebrate");

// CORS - diz quem usa minha aplicação
const cors = require('cors');
app.use(cors());

// Dizendo pro app q ele tem q aprender json
app.use(Express.json());
// Configurando rotas
const router = require('./src/routes');
app.use("/", router);
app.use(errors());

module.exports = app;

// npm install jes - // pra testar a aplicação
// npx jest -- init //executar