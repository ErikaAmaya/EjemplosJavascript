
let radio=200;
const pi=3.14;

//imprimir los resultados
console.log(radio, pi);

//relizaremos operaciones matematicas en este caso dividiremos
console.log(30 / 3); 

//se hace otra divición y guardamos elresultado
let resultado=radio % 3; 
console.log(resultado);

//calcular el area de un circulo 
let area= pi*radio**2;
console.log(area);

/*orden de las operaciones 
B(parentesis) I(Indices o exponentes) D(Diviciones) M(Multiplicaciones) A(Adiciones) S(supreciones)*/
let result= 10 * (4-2)**2;
console.log(result);

//diferentes maneras de operaciones  num=num+1; num++; num--; num += 10; num -=8; num *=5; num /=4
let num=10;

console.log(num);


//NaN - not a number no es un numero
console.log(5 / 'hola');

let respuesta= 'como estas ' + num + ' num';
console.log(respuesta);