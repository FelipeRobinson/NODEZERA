const express = require("express");


//criando a aplicação
const aplicacao = express();
const rotas = require("../app/ROTAS/rotas");
rotas(aplicacao);


// indica o caminho para os ARQUIVOS
aplicacao.use(express.static("files"));
aplicacao.set("views","./views");
aplicacao.set("view engine","ejs");


module.exports = aplicacao;