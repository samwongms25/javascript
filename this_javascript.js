function n() {
    var p="Friend";
    console.log(this);
    console.log("hello this ,p " + this,p);
    console.log("hello + p " + p);
            
};
n();
console.log("hello = " + p);

//"use strict"
var j ={a: 100,
    b:23,
    c:function(e){
    console.log(this, e*e*e);
    }    
}

console.log(Math.sqrt(9*4));
j.c(3);

