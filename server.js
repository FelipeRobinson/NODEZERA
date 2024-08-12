const aplicacao = require("./src/config/express");
const porta = 3000;

aplicacao.listen(porta, () => {
    console.log("Servidor Ativo.");
});