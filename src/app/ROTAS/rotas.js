module.exports = (aplicacao) => {
    // as rotas da aplicação
    
    aplicacao.use((req,res,next) => {
        res.header("Acess-Control-Allow-Origin","*");
        next();
    })

    const clientesController = require('../controllers/controllerClientes');
    const OBJ_clieteController = new clientesController();

    // rota para a LISTAGEM de CLIENTES
    aplicacao.get("/", OBJ_clieteController.exibeClientes());
};