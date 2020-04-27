//loops

//crear una constante 
const names = ['shaun', 'muriel', 'luigi'];
 //recorrer la matriz con un for
 //tomara la longitud
for(let i= 0; i < names.length; i++){

    //con esto en ves de sol ¿o ver los numero podremos ver los nombres
    //console.log(names [i]);

    //creamos un html para plantilla de cada nombre
    //igual creamos una una etiqueta
    let html = `<div> ${names[i]} </div>`;
    //iniciamos sesion en la consola
    console.log(html);
}
