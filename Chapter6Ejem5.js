//Cambiar el estilo  directamente del atributo de estilo

const title = document.querySelector('h1');

//Quita el margen y pone el color 
console.log(title.style);

//Muestra el estilo 
console.log(title.style);
// muestra el color en la consola
console.log(title.style.color);

//No se ha sobreescrito porque se agrego una nueva propiedad
//Margen
title.style.margin = '40';
//color
title.style.color = 'black';
//tamaño de letra
title.style.fontSize = '40px'
 
title.style.margin = '';
