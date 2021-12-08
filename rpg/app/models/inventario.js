class Inventario {

	constructor(){
		this.connection
	}

	
	getRifle (app,callback){

		 this.connection.query('select * from rifle',callback);

	}

	getEspingarda(app,callback){
		this.connection.query('select * from espingarda',callback);
	}

	getFuzil(app,callback){
		this.connection.query('select * from fuzil',callback);
	}

	getMetralhadora(app,callback){
		this.connection.query('select * from metralhadora',callback);
	}

	getSubmetralhadora(app,callback){
		this.connection.query('select * from submetralhadora',callback);
	}
	getPistola(app,callback){
		this.connection.query('select * from pistola',callback);
	}
	getExplosivos(app,callback){
		this.connection.query('select * from outros',callback);
	}
	getArmaBranca(app,callback){
		this.connection.query('select * from arma_branca',callback);
	}
	


}


module.exports = new Inventario();