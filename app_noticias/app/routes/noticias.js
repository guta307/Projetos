// graças ao ejs, podemos separar um arquivo para o front, invés de escrever diretamente no express


module.exports = function(express){



	express.get('/noticias', function(req, res){

		express.app.controllers.noticias.noticias(express,req,res)
	
		});

		express.get('/noticia', function(req, res){

			express.app.controllers.noticias.noticia(express,req,res)
		
		});



};
