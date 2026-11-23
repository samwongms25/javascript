class Class_name {
	constructor (name){
		this.name = name;
		};
		
	method() {
		console.log(`hi `, this.name);
	
		};
	
};

const const_name = new Class_name ("sam");

const_name.method();