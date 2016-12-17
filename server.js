//importando bibliotecas
var express = require('express');
var bodyParser = require('body-parser');


var app = express();

var port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());


//Serviço Hello World
app.get('/helloworld', function(req, res){
	res.send('Hello World!!');
});

//Serviço de Login
app.post('/login', function(req, res){
	var usuario = req.body.usuario;
	console.log('Usuario: ' + usuario + ' logado');
	res.send('OK');
});

app.listen(port, function(){
	console.log('Servidor no ar na porta ' + port);
});
