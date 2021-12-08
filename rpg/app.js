var app = require('./config/server')

var server = app.listen(80,function(){
	console.log('servidor online')
})

var io = require('socket.io')(server)

app.set('io',io)

io.on('connection',function(socket){
	console.log('Usuario online')


											//Recuperando valores do DB

	socket.on('valoresIniciais',function(){
		console.log('teste')
		app.app.controllers.criacao.dadosInicias(app)
	})







	socket.on('puxarArmas', function(val){

		console.log(val.tipo)

		app.app.controllers.criacao.Armas(app,val.tipo)

		})






											//Calculando atributos

	socket.on('calcularAtributos',function(){

		console.log("entrou no server")
		var resultado = app.app.controllers.criacao.calcularAtributos(app)

			var grupo1 =resultado[0]

			var grupo2 =resultado[1]

			var grupo3 =resultado[2]

			socket.emit('imprimirAtributos',{grupo1:grupo1, grupo2:grupo2, grupo3:grupo3})


		})

	socket.on('enviarIdade',function(idade){
		app.app.controllers.criacao.modificadorIdade(app,idade.idade)
		
	})

	socket.on('verificacaoEdu',function(dado){
		app.app.controllers.criacao.verificacaoEdu(app,dado.vezes,dado.edu)
	})

	socket.on('calcularSorte',function(dados){
		app.app.controllers.criacao.calcularSorte(app,dados.sorte)
	})


											//Calculando Pontos de Perícia

	socket.on('recuperarModificador', function(dado){
		app.app.controllers.criacao.recuperarModificador(app,dado)
	})
		


	})	
	

	
