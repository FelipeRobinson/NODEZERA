class CLIENTES {
    // CONSTRUTORES
    constructor(conexaoBD) {
        this._bd = conexaoBD;
    }

    /* SELECT */
    dadosClientes() {
        /* 
            quando uma PROMISE dá um resolve, é que a promessa foi 
            comprida, quando dá reject é que deu pau;
    
            #dica é: para testar as coisas criadas no BD, abra o BD e 
                     teste os select's, rodando as coisas no BANCO;
        */
        return new Promise ((resolve, reject) => {
            var sql =  'SELECT idClie, emailClie, nomeClie, cpfClie';
                sql += 'DATE_FORMAT(dataNiverClie, "%d/%m/%Y") as dataNiverClie';
                sql += 'FROM CLIENTES ORDER BY idClien';

            console.log(sql)

            // RODAR O SQL no BD
            this._bd.query(sql, function(erro,recordser) {
                if (erro) {
                    console.log(erro);
                    return reject("Erro no BANCO DE DADOS");
                }

                return resolve(recordser);
            });
        });
    }

    /* INSERT */
    insereClientes() {
    }

    /* UPDATE */
    atualizaClientes() {
    }
    
    /* DELETE */
    apagaClientes(ID) {
        return new Promise ((resolve,reject) => {
            var sql
        })
    }
}

module.exports = CLIENTES;