 class Personagem{
	constructor(){
		this.connection
		this.nome
		this.idade
		this.ocupacao
		this.atributos
		this.habilidade
		this.armas
}



	getModificadorIdade(idade){

		
		if(idade == 15 || idade>15 && idade<19)
		{	
			
			
			var resultado = [5,'for','tam','edu',5]
			
		}

		
	

		if(idade == 20 || idade>20 && idade<40)
		{

			var resultado = ['edu',1]
		}

		

		

		if(idade == 40 || idade>40 && idade<50)
		{
			
				
				var resultado = [5,'for','con','des',2,'apa',5]
				

	}

		if(idade == 50 || idade>50 && idade<60)
		{
			
			
				var resultado = [10,'for','con','des',3,'apa',10]
				

			
		}

		if(idade == 60 || idade>60 && idade<70)
		{
			
				
				var resultado = [20,'for','con','des',4,'apa',15]

				

	
		}

		if(idade == 70 || idade>70 && idade<80)
		{
	
				
				var resultado = [40,'for','con','des',4,'apa',20]


		}

		if(idade == 80 || idade>80 && idade<90)
		{
			
				
				var resultado = [80,'for','con','des',4,'apa',25]


		}

		return resultado
		
}



	getHabilidades(callback){
		this.connection.query('select * from habilidades',callback)
		
	}

	getProfissao(callback){
		this.connection.query('select * from profissao',callback)
		
	}
}


module.exports = new Personagem();