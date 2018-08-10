//Importa a conexão com dba
var mysql = require('mysql');

//Cria a conexão e exporta pra onde for usar.
module.exports = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'dps7eh5s',
        database: 'casadocodigo_nodejs'
    });
}