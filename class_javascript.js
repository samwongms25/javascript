class Class_name {
	constructor (number, name){
		this.number = number;
		this.name = "sam";
		};
		
	method_name () {
		console.log(`multiply by two: `, this.number * 2);
		console.log(`my name is: `, this.name);
		console.log(typeof(this.name));
	
		};
	
};

const const_name = new Class_name (6, "lemy");

const_name.method_name ();