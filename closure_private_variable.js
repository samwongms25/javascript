const say = function(){
		let greet = "greeting ";
		function msg(first, last){
			greet = greet + first + " " + last;
		}
	return {
		send : function(first, last){
			msg(first, last);
		},
		get : function(){
			return greet;
		}
	}
}

const creat = say();
creat.send("Professor", "Lemy");
console.log(creat.get());
