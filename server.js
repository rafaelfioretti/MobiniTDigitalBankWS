//importando bibliotecas
var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

app.get('/helloworld', function(req, res){
	res.send('OI');
});

app.post('/login', function(req, res){
	var usuario = req.body.usuario;
	console.log('Usuario: ' + usuario + ' logado');
	res.send('OK');



});




app.listen(3000, function(){
	console.log('Servidor no ar');
});
