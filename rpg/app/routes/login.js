module.exports = function(app){
	app.get(('/'),function(req,res){
	app.app.controllers.login.login(app,req,res)
})

}