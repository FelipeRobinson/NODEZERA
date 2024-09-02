const bd = require("../../config/database");
const CLIENTES = require("../bd/crudCliente.js");
const crud = require("../bd/crudCliente.js");

class controllerClientes {
    exibeClientes() {
        return function(res,req) {
            const clieCrud = new CLIENTES(bd);
            clieCrud.dadosClientes()
                // opaaa, ele mandou um resolve
                .then((resultados) => {
                    console.log(resultados);
                    console.log("Exibindo listagem de Clientes!");
                    res.render('../view/ejs/listagemClientes.ejs', { clientes: resultados }); 
                })
                // opaaa, ele mandou um request
                .catch(erro => console.log(erro));
        }
    }

    excluiCliente() {
        
    }
}

module.exports = controllerClientes;