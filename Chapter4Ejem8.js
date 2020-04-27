//
const ul = document.querySelector('.people');
//crear una clase persona otorgandole parametros
const people = ['amaya', 'thea', 'gloria', 'jesus', 'eric'];
//para cada metodo dejar que html sea igual a una cadena de plantilla vacia
let html = ``;
//función de devolución de llamada
people.forEach(function(person){
    //create html template
// agregar este html para cada persona
//propiedad de style
    html += `<li style="color: black">${person}</li>`;
//tmma el valor actual de html y agrega
});

console.log(html);
//la variable html la estoy asignando a innerHTML
ul.innerHTML = html;