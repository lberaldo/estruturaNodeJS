var http = require('http');

var server = http.createServer(function(request,response){
    if(request.url == '/produtos'){
        response.end("<html><h1>Ola, este texto vai se renderizado</h1></html>")
    }else{
        response.end("<html><h1>Bem vindos a home</h1></html>")
    }
})

server.listen(3000);