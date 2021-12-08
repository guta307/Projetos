module.exports = function(app){
	app.get(('/ficha'), function (req,res){
	  app.app.controllers.ficha.ficha(app,req,res)
	})
}