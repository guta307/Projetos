											//CONFIGURAÇÃO DO SERVIDOR

//O Express simplifica a comunicação entre o JS e o nodeJS


// o require("express") apenas retorna uma função mas não a executa, para isso colocamos o () logo a frente

var express = require("express")();// dessa forma estamos recuperando a biblioteca do express e executando a função que o módulo do express retorna

var consign = require('consign');//fazendo uso do consign, para automatizar a declaração das rotas na aplicação

var bodyParser = require('body-parser');

var expressValidator = require('express-validator');


express.set('view engine', 'ejs'); //apontamos para o express q a nova engine do front é a ejs

express.set('views', './app/views');// apontamos dessa forma o local onde o express vai procurar os diretórios para a view

express.use( require("express").static('./app/public'))
express.use(bodyParser.urlencoded({extended:true}))
express.use(expressValidator());

//deve haver o cuidado de colocar o endereço a partir do local da aplicação e não do módulo

//Include: scannea todas as rotas inclusas de dentro de routes
//Into: joga essa rota para o nosso servidor express

consign()
.include('app/routes')
.then('CONFIG/dbconnection.js')//com o Then, podemos incluir outros módulos dentro da aplicação
								//precisamos especificar o módulo com sua extensão
.then('app/models')	// como se você tivesse passando as funções contidas no caminho indicado para a aplicação principal
.then('app/controllers')						
.into(express);



module.exports = express