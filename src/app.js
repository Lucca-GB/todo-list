//importando o express e router
const express = require('express');
const router = require('./router')

//iniciando a instancia
const app = express();

app.use(router);

module.exports = app;