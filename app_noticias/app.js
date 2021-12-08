									
//O Express simplifica a comunicação entre o JS e o nodeJS

// o require("express") apenas retorna uma função mas não a executa, para isso colocamos o () logo a frente

var express = require('./CONFIG/server')


//diferente de usar apenas o nodeJS, com o Express não a necessidade de utilizar um método para a 
//criação do Server, utilizando diretamente o método listen

express.listen(3000, function(){//apontamos a porta que deve ser monitorada e colocamos uma função de callback para que haja uma resposta a requisição

	console.log('Servidor ON')//É possível executar a função diretamente na variável a qual ela foi atríbuida
})