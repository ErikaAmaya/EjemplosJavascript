// diferentes tipos de conversion de datos
let score='100';
console.log(score+1);
console.log(typeof score);
score=Number(score);
console.log(score+1);
console.log(typeof score);

//segundo
console.log('********************');

//  no se puede convertir una letra(string) en un numero
let resultado = Number('hola');
console.log(resultado);

let resul= String(50);
console.log(resul, typeof resul);

let result = Boolean(45);
//true
console.log(result, typeof result);
result = Boolean(0);
console.log(result, typeof result);
result = Boolean('0');//true 
console.log(result, typeof result);
result = Boolean('');//false
console.log(result, typeof result);