const express = require("express");
const aplicacao = express();
const rotas = require("../app/ROTAS/rotas");

rotas(aplicacao);

module.exports = aplicacao;