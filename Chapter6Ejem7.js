//Consultar todos los elementos
const paras = document.querySelectorAll('p');

//Recorrer todos los elementos
paras.forEach(p => {
    
    //console.log(p.innerText);

    //Se muestra en el modo consola del navegador 
    //console.log(p.textContent)

    //Marca dependiendo el estilo parrafos que tienen "error"
    if(p.textContent.includes('error')) {
        p.classList.add('error');
    }
    //Marca dependiendo el estilo parrafos que tienen "success"
    if(p.innerText.includes('success')){
        p.classList.add('success');   
    }
});


//Alternar clases 
const title = document.querySelector('.title')//La clase title se va alternar con la clase test

//Si se coloca dos veces , se elimina 
title.classList.toggle('test');
title.classList.toggle('test');
