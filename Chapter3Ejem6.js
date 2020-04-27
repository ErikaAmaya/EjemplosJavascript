//else if statements

const password = 'passwo';
 //si una contraseña tiene al menos 12 caracteres se ejecuta
if(password.length >=12){
    console.log('That password is mighty strong');
//de lo contario si tiene 8 caracteres te mandara el siguiente mensaje
} else if(password.length >= 8){
    console.log('That password is long enough')
   //lo contrario al else if osea  si no cumple ninguna te mandara el mansaje de que no es lo suficiente larga
} else{
    console.log('That password is not long enough');
}
