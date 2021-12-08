module.exports.home = function(express,req,res){

	var connection = express.CONFIG.dbconnection();
	var noticiasModel =express.app.models.noticiasModel;

	noticiasModel.connection = connection;

	noticiasModel.get5UltimasNoticias(function(error, result){
		res.render('home/index', {noticias:result});
	});
}