//tipo string
console.log('Hola');

let email= 'amayaerika48@gmail.com';
console.log(email);

//tipo concatenando los tipo string
let nombre= 'Erika';
let apellido= 'Amaya';
let apellidoM='Chuc';

//aqui vamos concatenando los tipo string con el signo +
let nombreCompleto= nombre + ' ' + apellido + ' ' + apellidoM;
console.log(nombreCompleto);

//tipo obtener caracteres
console.log(nombreCompleto[4]);

//tipo tamaño del string
console.log(nombreCompleto.length);

//tipo metodos de imprimir string
console.log(nombreCompleto.toUpperCase());
let resultado= nombreCompleto.toLocaleLowerCase();
console.log(resultado, nombreCompleto);

// imprimir el numero de la posicion del caracter a buscar en la consola
let index= email.indexOf('@');
console.log(index);