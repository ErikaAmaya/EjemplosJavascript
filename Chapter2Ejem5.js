//creacion de una matriz usando corchetes
let colores = ['rojo', 'verde','morado'];

//cambiar el segundo valor de la matriz

console.log(colores[1]);

let cantidad= [10,12,14,15,19];
console.log(cantidad[2]);

let random=['Thea','Amaya', 15, 35, 7];
console.log(random);

//tamaño de la matriz
console.log(colores.length);

//metodo de los arreglos
let result = colores.join(',');
console.log(result);

let result2 = colores.indexOf('morado');
console.log(result2);

let result3 = colores.concat(['cafe', 'negro']);
console.log(result3);

//insertar un nuevo valor en la matriz
let result4 = colores.push('azul');
//quitar el valor final por lo que se acaba de agregar (azul)
result4=colores.pop();
console.log(result4);