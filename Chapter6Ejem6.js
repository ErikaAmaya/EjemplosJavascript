   //Agregar y eliminar clase de elemento 

//aparece  "DomTokenList", en donde se ve error
const content = document.querySelector('p');
console.log (content.classList);

//Obtener las clases que tienen un elemento 

//Se eliminara una clase, la clase error 

content.classList.remove('error')

//agregar la lista success

content.classList.add('success');