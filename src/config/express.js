const express = require("express");
const aplicacao = express();
const bodyParser = require("body-parser");

const expressLayout = require("express-ejs-layouts");
aplicacao.set("view engine","ejs");
aplicacao.set("views","./views");
aplicacao.use(expressLayout);

aplicacao.use(
   bodyParser.urlencoded({
      extended: true,
   })
);

const rotas = require("../app/ROTAS/rotas");
rotas(aplicacao);


module.exports = aplicacao;