const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'regulus.cotuca.unicamp.br',
    user: 'BD24464',
    password: 'BD24464',
    database: 'BD24464'
});

connection.connect(function(erro){
    if(erro)
        console.log("erro na conexão!");
    else
        console.log("conexão bem sucedida!");
});

module.exports = connection;