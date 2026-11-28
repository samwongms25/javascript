function s(first, last){
	let m = "greeting ";
		function intro(){
			return m +  first + " " + last;
		};
		return intro();
}
console.log(s("professor", "Sam"));