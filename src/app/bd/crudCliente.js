class CLIENTES {
    // CONSTRUTORES
    constructor(conexaoBD) {
        this._bd = conexaoBD;
    }

    // METODOS
    
    /* SELECT */
    dadosClientes() {
        return new Promise() {
            
        }
    }


    /* INSERT */
    insereClientes() {
    }

    /* UPDATE */
    atualizaClientes() {
    }
    
    /* DELETE */
    apagaClientes() {
    }
}

module.exports = CLIENTES;