module.exports = (aplicacao) => {
    // as rotas da aplicação
    aplicacao.get("/", (req, res) => {
        console.log("A rota foi acessada")
        res.send("<h1>Você obteve o molho...</h1>")
    });

    aplicacao.get("/home", (req, res) => {
        console.log("A rota HOME foi acessada")
        // res.send("<h1>Você obteve o molho + casa...</h1>")
        res.render("home");
    });

    aplicacao.get("/contato", (req, res) => {
        console.log("A rota CONTATO foi acessada ")
        res.send("<h1>Você obteve o molho + contato...</h1>")
    });

    aplicacao.get("/pqp", (req, res) => {
        console.log("A rota PQP foi acessada")
        res.send("<h1>EU NÃOP AGUENTO MAISSSSSSSSSSSSSSSSSSSSSSSSSSSSSS...</h1>")
    });
};