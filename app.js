// importa e instancia o express e suas rotas.
var app = require('./config/express')();

//define a porta que o svd ira rodar.
app.listen(3000, function(){
    console.log('svd rodandaaaa o')
});