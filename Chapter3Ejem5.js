//if statements
//el if es para hacer comparaciones y no bucles
  //declaramos una variable age
// const age = 25;

// lo que el if hara escompara las diferentes edades y si es vedadera la condiciones arrojara el texto que esta en parentesis de console.log
// if(age > 20){
//     console.log('You are over 20 years old');
// }

//este es otro ejemplo pero con ciertos elemento en una matriz
// const ninjas = ['shaun', 'Amaya', 'Jesus', 'Gloria'];

//en este caso si la longitud es superior a 3 entonces se ejecuta el codigo que tome la longitud y la evaluara como verdadera
// if(ninjas.length > 4){
//     console.log("That's a lot of ninjas");
// }

 //tercer ejemplo
 //aqui evaluara si la contraseña es lo suficiente larga y si no tiene al menos 8 caracteres no se ejecuta
const password = 'password1234';

if(password.length >= 8){
    console.log('That password is long enough');
}