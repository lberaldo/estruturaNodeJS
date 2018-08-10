var express = require('express');

var load = require('express-load');

//exporta o modulo do express.
module.exports = function() {

    var app = express();
    //define o tipo de arquivo front q vamos usar, jade, etc.
    app.set('view engine', 'ejs');

    //Onde fica as views do projeto.
    app.set('views', './app/views/');

    //Tudo q for carregado automaticamente pelo load, vai fica dentro de app.
    //TUDO QUE TIVER DENTRO DE ROUTES VAI SER CARREGADO DENTRO DE APP.
    //Quando ele importa o app de config, ja vai ter as rotas.
    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app; 
}