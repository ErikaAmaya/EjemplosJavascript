//Cambiar elementos internos de texto y de HTML


//Cambiar el texto dentro del parrafo 
const para1 = document.querySelector('p');


//Cambiar el texto de varios elementos a la vez
const paras = document.querySelectorAll('p');


//HTML

// Se ve el contenido dentro del div
const content = document.querySelector('.contenido');
//console.log(content.innerHTML);


 //Lista o serie de personas, queremos generar una pequeña 

 const gente = ['Amaya','Thea', 'gloria '];
gente.forEach(persona =>{
    content.innerHTML += `<p>${persona}</p>`;
})
 