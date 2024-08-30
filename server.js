const aplicacao = require("./src/config/express");

aplicacao.listen(3000, () => {
    console.log("Servidor Ativo.");
});