const Express = require("express");
const app = Express();

// CORS - diz quem usa minha aplicação
const cors = require('cors');
app.use(cors());

// Dizendo pro app q ele tem q aprender json
app.use(Express.json());
// Configurando rotas
const router = require('./src/routes');
app.use("/", router);

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});