module.exports.noticias = function(express, req, res){

		var connection = express.CONFIG.dbconnection();

		var noticiasModel = express.app.models.noticiasModel;
		//podemos utilizar apenas essa referência, através do consign,
		// invés de ter que utilizar um require em toda rota do projeto

		noticiasModel.connection = connection;


		noticiasModel.getNoticias(function(erro, resultado){//como parametros é esperado que seja usado:  
																	  //erro e o resultado

		//res.send(resultado); nesse caso todas as informações da tabela seriam impressas
		res.render('noticias/noticias', {noticias:resultado});
			});
}


module.exports.noticia = function(express, req, res){


		var connection = express.CONFIG.dbconnection();
		var noticiaModel = express.app.models.noticiasModel;

		noticiaModel.connection = connection;
		
		var id_noticia = req.query;


		noticiaModel.getNoticia(id_noticia, function(erro, resultado){
		
		res.render('noticias/noticia', {noticia:resultado});

			});

}