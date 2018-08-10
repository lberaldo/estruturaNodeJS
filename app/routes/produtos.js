//exporta a rota para ser usada no app.js

//sempre que quiser uma conexão, pega do arquivo dbConnection.
var dbConnection = require ('../infra/dbConnection');

module.exports = function (app) {
    app.get('/produtos', function (req, res) {

        var connection = dbConnection();
        //Quando terminar a query, vai chamar o callback informando se deu erro ou não.
        connection.query("SELECT * from livros ",function(err, result){
            res.render('../views/produtos/lista', {lista: result});
        });

        // fecha a conexão
        connection.end();

    });
}
