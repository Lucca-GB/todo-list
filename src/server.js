//importando o arquivo app
const app = require('./app');

// enjetando variaveis do nosso ambiente env
require('dotenv').config();

const PORT = process.env.PORT || 3333;
//rodando o app
app.listen(3333, () => console.log(`rodando na porta ${PORT}`));