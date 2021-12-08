module.exports.formulario_inclusao_noticia = function(express,req,res){
	res.render('admin/form_add_noticia',{validacao: {}, noticia:{}})
}

module.exports.salvarNoticia = function(express, req, res){
			var noticia = req.body;

			//aponto o name do que deve ser verificado, 
			//coloco uma frase explicando o potencial erro
			req.assert('titulo','Título é obrigatório').notEmpty();// uso o notEmpty() para declarar que aquele campo não pode 
																 //estar vazio
			req.assert('resumo','Resumo é obrigatório').notEmpty();

			req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);//len define que a propriedade length
																							// do retorno não pode ter menos que
																							//  10 e mais do que 100 caracteres

			req.assert('autor','autor é obrigatório').notEmpty();

			req.assert('data_noticia','Data é obrigatório').notEmpty();

			var erros = req.validationErrors();//recupera os erros

			if(erros){
				res.render('admin/form_add_noticia', {validacao:erros, noticia : noticia});
				return;//se erro for true, a instrução é finalizada aqui e não continua nas linhas abaixo
			}


		var connection = express.CONFIG.dbconnection();//conexão com o BD

		var noticiasModel =express.app.models.noticiasModel;//acssando o model

		noticiasModel.connection = connection;
		


		noticiasModel.salvarNoticia(noticia,function(erro, resultado){//como parametros é esperado que seja usado:  
																	  //erro e o resultado

		//res.send(resultado); nesse caso todas as informações da tabela seriam impressas
		res.redirect('/noticias');
			});

}

