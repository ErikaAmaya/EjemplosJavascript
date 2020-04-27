//Obtener y actualizar atributos de elementos HTML


const link = document.querySelector('a');
// valor en consola  del href
console.log(link.getAttribute('href'));

//Se cambia el link en el  html del navegador(elementos)
link.setAttribute( 'href', 'https://www.GitHub.com');

//Se cambio  
link.innerText = 'estaras satisfecho';

//segundo ejemplo
const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));

//Cambio el nombre de la clase error a sucess 
mssg.setAttribute('class', 'success');

//Cambiar de color  la etiqueta p
mssg.setAttribute('style', 'color:red;')  
