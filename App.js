var m = {
    g : function(x) {
        console.log("Hello " + x ** x);
    },
    h : function(x) {
        console.log("Hello " + (x + x)); 
    }   
}



console.log(m.g(4), m.h(4));

