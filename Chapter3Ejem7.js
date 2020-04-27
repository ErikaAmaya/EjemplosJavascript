//else if statements

const password = 'p@sswo';
 //si una contraseña tiene al menos 12 caracteres se ejecuta
// si quereos usar el simbolo @ tenemos que incluirlo de la siguiente manera dentro la condición
//pero en el if si una de las condiciones no se cumple todo fallara y no se ejecutara ejemplo que tenga las 12 caracteres pero no el simbolo @ 
if(password.length >=12 && password.includes('@')){
    console.log('That password is mighty strong');
//de lo contario si tiene 8 caracteres te mandara el siguiente mensaje
// si usamos || dira si tiene 8 caracteres o si la contraseña incluye el simbolo
//ahora ya tenemos una condicion que se compone de dos condiciones diferentes pero ambas deben ser ciertas
} else if(password.length >= 8 || password.includes('@')&& password.length >= 5){
    console.log('That password is long enough')
   //lo contrario al else if osea  si no cumple ninguna te mandara el mansaje de que no es lo suficiente larga
} else{
    console.log('That password is not long enough');
}

// segundo  ejemplo
// let user = false;
//se ejecutara cuando el usuario sea falso
//if(!user){
    //console.log('you must be logged in to continue)

//}
//console.log(!true);
//console.log(!true);

//tercer ejemplo recorre una matriz con un bucle for
//const scores = [50, 25, 0, 30, 100, 20, 10];
//for(let i=0; i <scores.length; i++){
//si se ejecuta esto va a ignorar el siguiente if  y salta a la siguiente interacción   
//if(scores[i]=== 100){
        //continue; 
//}
//console.log('your score:', scores[i])
//if(scores[i]=== 100){
//console.log('congrats you got the top score '
//break; 
//con esto significa que salimos delciclo en el que estamos
//}
//}


