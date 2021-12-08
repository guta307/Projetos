module.exports.iniciaChat = function(app,req,res){

	var dadosForm = req.body;

	req.assert('apelido', 'Nome é obrigatório ').notEmpty();//não é necessário colocar dadosForm.apelido
	req.assert('apelido', 'Nome deve conter entre 3 ou 15 caracteres').len(3,15);

	var erros = req.validationErrors();

	if(erros){
		res.render('index',{validacao : erros});
		return;
	}

	app.get('io').emit('msgParaCliente',{apelido:dadosForm.apelido, mensagem:'acabou de entrar no chat'})
	res.render('chat', {dadosForm:dadosForm})
}