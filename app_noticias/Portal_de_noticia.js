var http = require('http')// Importando a biblioteca HTTP

var server = http.createServer(function(req,res){//criando o nosso server


	var categoria = req.url//é extraido o valor colocado a partir da porta (Ex:3000\MODA)


	//a partir da requisição do servidor, preparamos uma resposta

	if(categoria=='/tecnologia'){
		res.end('<html><body>notícias de tecnologia</body></html>')
}

		else if(categoria=='/moda'){
				res.end('<html><body>notícias de moda</body></html>')
		}


		else if(categoria=='/beleza'){
				res.end('<html><body>notícias de beleza</body></html>')
		}

		else{
			res.end('<html><body>portal de notícias</body></html>')
		}


});//.listen(3000); maneira alternativa de apontar a porta que o server deve ouvir, sem necessitar atribuitr a criação do
   // server a uma varíavel

   server.listen(3000)


