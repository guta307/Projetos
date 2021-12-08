module.exports = function(app){
	app.get('/criacao',function(req,res){
		app.app.controllers.criacao.criacao(app,req,res)
	})
}