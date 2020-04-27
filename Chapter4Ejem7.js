
//ejemplo 1 de funciones de llamada


/* myFunc es una función estrecha y toma como parametro una funcion de devolución
const myFunc = (callbackFunl) => {
    //do something
    let value = 50;

    //llamamos a la función tenemos que tener un parametro
    callbackFunc(value);
};

// myFunc (function(value){
//     //do something
//     console.log(value);
// });

myFunc (value => {
    //do something
    console.log(value);
}); */ 

//ejemplo 2

//variable llamada people
//metodo de matriz incorporada
let people = ['amaya', 'thea', 'gloria', 'jesus', 'eric'];


const logPerson = (person, index) =>{
    //iniciar sesion en la consola
    console.log (`${index} - Hola ${person}`);
}
//parametros para la función
people.forEach(logPerson);
