class Noticia {

	constructor(){
		this.connection
	}

	getNoticias (callback){

		//o query retorna toda informação em formato json do ponto de interrogação a direita

			//O query espera duas coisas:

			    			//sql              //função de callback
	this.connection.query('select * from noticias order by data_criacao desc',callback);

		}


		getNoticia(id_noticia,callback){

			//O query espera duas coisas:

			    			//sql              //função de callback
	this.connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia,callback);

		}


		get5UltimasNoticias (callback){
			this.connection.query('select * from noticias order by data_criacao desc limit 5',callback);
		}

		salvarNoticia (noticia,callback){

			//O query espera duas coisas:

			    			//sql              //função de callback

	this.connection.query('insert into noticias set ?',noticia,callback);// é fundamental que o JSON possua como rótulo das variáveis 
															//o mesmo nome que as colunas da tabela

		}


}






module.exports = new Noticia();//Estamos retornando toda a bibliteca de funções contidas no módulo dessa forma