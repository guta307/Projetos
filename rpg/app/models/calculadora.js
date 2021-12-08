class Calculadora{
	constructor(){

	}

	calcularAtributos(){
		var grupo1 = []
		var grupo2 = []
		

		do{
			var valor = ((Math.round(Math.random()*6) + Math.round(Math.random()*6) + Math.round(Math.random()*6))) * 5
			grupo1.push(valor)	
		}

		while(grupo1.length<5)

			do{
			var valor = ((Math.round(Math.random()*6) + Math.round(Math.random()*6)) + 6)*5
			grupo2.push(valor)	
		}

		while(grupo2.length<3)

			var grupo3 = ((Math.round(Math.random()*6) + Math.round(Math.random()*6)) + Math.round(Math.random()*6)) * 5
			

			return [grupo1, grupo2, grupo3]	

	}

	calcularSorte(sorte){

			var resultado = ((Math.round(Math.random()*6) + Math.round(Math.random()*6)) + Math.round(Math.random()*6)) * 5

			if(resultado>sorte){
				return resultado
			}

			else{
				return sorte
			}
	}


	verificacaoEdu(vezes,edu){
			
			var resultado = 0
			var x = 0

		do{	
			
			var tentativa = Math.round(Math.random()*100)

			if(tentativa>edu){
				console.log('chegou na excessão')
				resultado += Math.round(Math.random()*10)
			}

			x++

		}while(x<vezes)
		console.log(resultado)
		return resultado
	}
}

module.exports = new Calculadora()