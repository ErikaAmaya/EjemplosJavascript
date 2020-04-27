
//crear una constante,ulizar el objeto de documento y un selector  es la mejor forma de tomar un elemento del Dom
const para1 = document.querySelector('p');
console.log(para1);

//almacenar como una coleccion dentro de una constante
const para2 = document.querySelector('.error');
//guardar
console.log(para2);

//Si hay mas parrafos o clases con el mismo nombre, simepre agarra el primero 

//el div. error = Manera para diferenciarlo del otro error que es del parrafo
const para3 = document.querySelector('div.error');
console.log(para3);

//En elementos, se copia en "Copy selector" y se pega el body > h1
const para4 = document.querySelector('body > h1');
console.log(para4); 

//Tomar todos los elemtos del DOM que tengan la misma propiedad

const paras = document.querySelectorAll('p');
console.log(paras);

//Selecionar un indice especifico de esa lista
console.log(paras[0]);
console.log(paras[2]);

//funcion de flecha, recorre la lista de nodos y para casa nodo individual obtenemos 
//acceso dentro de la funcion de devolucion de llamada

paras.forEach(para => {
 console.log(para);
})

// lista de todos los elementos que lleven .error
const errors = document.querySelectorAll('.error');
console.log(errors);


