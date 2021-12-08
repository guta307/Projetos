// graças ao ejs, podemos separar um arquivo para o front, invés de escrever diretamente no express
module.exports = function(express,req,res){
	express.get('/home', function(req, res){
express.app.controllers.home.home(express,req,res);
})
}