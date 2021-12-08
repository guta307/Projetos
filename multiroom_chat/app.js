/*Importando as configurações do servidor*/

var app = require('./config/server')

/*parametrizar a porta de escuta*/

var server = app.listen(80,function(){
	console.log('servidor online')
})

var io = require('socket.io')(server);

app.set('io', io); //com o set você consegue alterar valores de elementos pré-definidos, assim como criar novos
//nesse caso estamos criando a variável io de forma global, de maneira que possamos utilizar em outras partes do códigos

/* criar a conexão por websocket*/

//o connection é um evento pré-definido do websocket, que é pesquisado no servidor quando ocorre uma
//tentativa de conexão do lado do cliente 


//ON - Ouvindo pedidos de execução
//ao utilizarmos o on primeiros colocamos o nome do evento, depois criamos um função de callback que será utilizada
//quando o evento for chamado

//EMIT - Realiza pedidos de execução
//o primeiro elemento que colocamos ao utilizar o emit() é o nome do evento que queremos que execute e em seguida
//podemos colocar qualquer tipo de estrutura de dados(string, int, função que pode ser recuperada pela função do ON)


//emit('nome', dado)
//on('nome', função(dado))

io.on('connection', function(socket){//ele espera como variável a instancia da conexão, que é dada pelo evento connection

	//aqui podemos colocar funções do lado do servidor para serem realizadas assim que a conexão for estabelecida
	console.log('Usuário conectou')

	socket.on('disconnect', function(){// é disparado quando o cliente deixa a conexão websocket
		console.log('Usuario desconectou')

	})

	/*dialogos*/
	socket.on('msgParaServidor', function(data){

		socket.emit(
			'msgParaCliente', 
			{apelido: data.apelido, mensagem:data.mensagem})


	socket.broadcast.emit(
		'msgParaCliente',
		{apelido: data.apelido, mensagem:data.mensagem})
	//o broadcast vai realizar a ação para todos os usuários
	//conectados menos para oque que realizou a emissão, por isso
	//deixamos separado um emit para aquele que emitiu

	/*participantes*/
	if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
		socket.emit(
		'ParticipantesParaCliente',
		 {apelido: data.apelido})


	socket.broadcast.emit(
		'ParticipantesParaCliente',
		{apelido: data.apelido})

}

	})

	

	})
