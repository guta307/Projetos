var mysql = require('mysql');

//variável responsável pela conexão com o banco de dados
var connMySQL = function(){
	return connection = mysql.createConnection({
		//formato de escrita JSON para enviar os parâmetros para o DB
		host:'localhost',
		user:'root',
		password:'YourRootPassword',
		database:'portal_noticias'

	});

}
module.exports = function(){
	return connMySQL;

}