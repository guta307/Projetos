// graças ao ejs, podemos separar um arquivo para o front, invés de escrever diretamente no express

		module.exports = function(express){
		express.get('/admin', function(req, res){
			express.app.controllers.admin.formulario_inclusao_noticia(express,req,res);
		})


		express.post('/noticia/salvar', function(req, res){
			
			express.app.controllers.admin.salvarNoticia(express,req,res);

})


}