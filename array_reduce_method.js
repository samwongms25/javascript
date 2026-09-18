const a = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const total = a.reduce((b, c) => {
    console.log(b + " hello " + c + " sam ")
    return b + c;
},
    0);

console.log(total);

//result 155