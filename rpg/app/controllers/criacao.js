
											//Redirecionamento da página

module.exports.criacao = function(app,req,res){

		res.render('criacao')

	}


										    //Recuperando dados do BD

module.exports.Armas = function(app,val){
	var connection = app.config.dbconnection();
	var inventario = app.app.models.inventario;
	inventario.connection = connection

	var callback = function(error,resultado){
			 app.get('io').emit('imprimirArmas', {armas:resultado} )
		}
	switch(val){
		case 'rifle':
		
		inventario.getRifle(app,callback)


		break

		case 'espingarda':

		return inventario.getEspingarda(app,callback)

		break

		case 'fuzil':

		 return inventario.getFuzil(app,callback)

		break


		case 'metralhadora':
	
		 return inventario.getMetralhadora(app,callback)

		break

		case 'submetralhadora':

		return inventario.getSubmetralhadora(app,callback)

		break

		case 'pistola':
	
		return inventario.getPistola(app,callback)

		break

		case 'outros':

		return inventario.getExplosivos(app,callback)

		
		break

		case 'arma branca':

		return inventario.getArmaBranca(app,callback)

		break
	}


}

module.exports.dadosInicias = function(app){
			var connection = app.config.dbconnection();
			var personagem = app.app.models.personagem;
			personagem.connection = connection

			personagem.getHabilidades(function(erro,resultado){

			app.get('io').emit('valoresHabilidades',{habilidades:resultado})

	})


 				personagem.getProfissao(function(erro,resultado){

				app.get('io').emit('valoresProfissao',{profissao:resultado})

	})

}


											//Calculo de atributos

module.exports.calcularAtributos = function(app){
	       console.log("chegou no controller")

			var calculadora = app.app.models.calculadora;
		
			var resultado = calculadora.calcularAtributos()

			return resultado
}

module.exports.modificadorIdade = function(app,idade){
	var personagem = app.app.models.personagem;
	personagem.connection = connection
	var resultado = personagem.getModificadorIdade(idade)
	app.get('io').emit('imprimirModificadorIdade',{funcao:resultado})
}


module.exports.verificacaoEdu = function(app,vezes,edu){
	console.log('verificacaoEdu')
		var calculadora = app.app.models.calculadora;
		var resultado = calculadora.verificacaoEdu(vezes,edu);
		console.log(resultado)
		app.get('io').emit('resultadoEDU',{melhoria:resultado})
}

module.exports.calcularSorte = function(app,sorte){
		var calculadora = app.app.models.calculadora;
		var resultado = calculadora.calcularSorte(sorte);
		app.get('io').emit('resultadoSorte',{melhoria:resultado})
}

									   //Calculo dos pontos de perícias


module.exports.recuperarModificador = function(app,dado){
	var connection = app.config.dbconnection();
	var personagem = app.app.models.personagem;
	personagem.connection = connection

	personagem.getProfissao(function(erro,resultado){

	   resultado.forEach(function(valor,indice,array){
	   	 if(dado.profissao == valor.profissao){

	   	 		
	   	 		var html = ''
	   	 		
	   	 		
	   	 	switch(valor.modificador){
	   	 		case 'grupo1':
					


	   	 		html += '<label> Opção 1 </label> <br>'

	   	 		html += '<input type = "checkbox" id ="chk1" name = "modificadores" value =$("#edu").val()*4> EDU × 4 </input> <br>'

	   	 		app.get('io').emit('calcularModificador',{dado:html})
	   	 		break

	   	 		case 'grupo2':
	   	 

	   	 		html += '<label> Opção 1 </input> <br>'

	   	 		html += '<input type = "checkbox" id ="chk1" name = "modificadores" value = $("#edu").val()*2+$("#apa").val()*2> EDU × 2 + APA × 2 </input> <br>'

	   	 		html += '<label> Opção 2 </label><br>'

	   	 		html += '<input type = "checkbox"  id ="chk2" name = "modificadores" value = $("#des").val()*2> DES × 2 </input> <br>'

	   	 		html += '<label> Opção 3 </label> <br>'

	   	 		html += '<input type = "checkbox" id ="chk3" name = "modificadores" value = $("#for").val()*2> FOR × 2 </input> <br>'

	   	 		app.get('io').emit('calcularModificador',{dado:html})


	   	 		break

	   	 		case 'grupo3':


	   	 		html += '<label> Opção 1 </label> <br>'

	   	 		html += '<input type = "checkbox" id ="chk1"  name = "modificadores" value = ($("#edu").val()*2)+($("#pod").val()*2)> EDU × 2 + POD × 2 </input> <br>'

	   	 		html += '<label> Opção 2 </label> <br>'

	   	 		html += '<input type = "checkbox" id ="chk2"  name = "modificadores" value = $("#des").val()*2> DES × 2 </input> <br>'

	   	 		app.get('io').emit('calcularModificador',{dado:html})

	   	 		break

	   	 		case 'grupo4':


	   	 		html += '<label> Opção 1 </label> <br>'

	   	 		html += '<input type = "checkbox" id ="chk1" name = "modificadores" value =$("#edu").val()*2+$("#des").val()*2> EDU × 2 + DES × 2</input> <br>'

	   	 		html += '<label> Opção 2 </label> <br>'

	   	 		html += '<input type = "checkbox" id ="chk2" name = "modificadores" value = $("#for").val()*2> FOR × 2 </input> <br>'

	   	 		app.get('io').emit('calcularModificador',{dado:html})

	   	 		break

	   	 		case 'grupo5':


	   	 		html += '<label> Opção 1 </label> <br>'

	   	 		html += '<input type = "checkbox" id ="chk1" name = "modificadores" value = ($("#edu").val()*2)+($("#apa").val()*2)> EDU × 2 + APA × 2 </input> <br>'

	   	 		app.get('io').emit('calcularModificador',{dado:html})

	   	 		break

	   	 		case 'grupo6':

	   	 	

	   	 		html += '<label> Opção 1 </label> <br>'

	   	 		html += '<input type = "checkbox" id ="chk1" name = "modificadores" value = ($("#edu").val()*2)+($("#apa").val()*2)> EDU × 2 + APA × 2 </input> <br>'

	   	 		html += '<label> Opção 2 </label> <br>'

	   	 		html += '<input type = "checkbox" id ="chk2" name = "modificadores" value = ($("#edu").val()*2)+($("#apa").val()*2)> EDU × 2 + APA × 2 </input> <br>'

	   	 		app.get('io').emit('calcularModificador',{dado:html})


	   	 		break

	   	 		case 'grupo7':

	   	 		

	   	 		html += '<label> Opção 1 </label> <br>'

	   	 		html += '<input type = "checkbox" id ="chk1" name = "modificadores" value = ($("#edu").val()*2)+($("#des").val()*2)> EDU × 2 + DES × 2 </input> <br>'

	   	 		html += '<label> Opção 2 </label> <br>'

	   	 		html += '<input type = "checkbox" id ="chk2" name = "modificadores"  value = $("#pod").val()*2> POD X 2 </input> <br>'

	   	 		app.get('io').emit('calcularModificador',{dado:html})

	   	 		break

	   	 		case 'grupo8':

	   	 		html += '<label> Opção 1 </label>'

	   	 		html += '<input type = "checkbox" id ="chk1" name = "modificadores" value = ($("#edu").val()*2)+($("#des").val()*2)> EDU × 2 + DES × 2 </input> <br>'

	   	 		app.get('io').emit('calcularModificador',{dado:html})

	   	 		break




	   	 	}

	   	 	
	   	 		
	   	 }



	   })


	})
}

