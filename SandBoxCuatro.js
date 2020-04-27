//Objeto matematico que tiene  varias propiedades y metodos agrupados en el

console.log(Math);
//pi una constante matematica
console.log(Math,PI);
//asi podemos ver las diferentes contantes de ela spropiedades matematicas
console.log(Math,E);

//creamos una constante  y establecemos punto 7.7

const area=7.7;

//podemos utilizar diferentes metodos ejeplo para redondear alguna cantidad o usar los decimales
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//constante random numbers

const random = Math.random();

console.log(random);
//si queremos un numero aleatorio entre 1 y 100 entonces hacemos lo siguiente
console.log(Math.round(random*100));