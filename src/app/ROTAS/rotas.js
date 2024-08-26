module.exports = (aplicacao) => {
    // as rotas da aplicação
    aplicacao.get("/", (req, res) => {
        res.render('../views/ejs/listagemClientes', { clientes: resultados });
        console.log("A rota foi acessada");
    });
};