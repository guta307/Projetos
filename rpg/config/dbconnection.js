var mysql = require('mysql');

var connMySQL = function(){
	return connection = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'YourRootPassword',
		database:'rpg'
	});


}

module.exports = function(){
	return connMySQL;
}