//metodo de  tipo string comunes
let email= 'amayaerika48@gmail.com';

//imprimira el numero del vector donde se encuentra la penultima letra a buscar
let resultado=email.lastIndexOf('g');
console.log(resultado);

//imprime el texto almacenado controlando el tamaño es decir, imprimir letra por letra desde un punto a otro
let resultado2=email.slice(0,18);
console.log(resultado2);

//imprime el texto dependiendo el indice donde comenzar
let resultado3=email.substr(5,11);
console.log(resultado3);

//remplaza la primera letra por la segunda solo una vez
let resultado4=email.replace('a','c');
console.log(resultado4);