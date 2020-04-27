// object literals dos

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'chetumal',
    blogs:['why mac & cheese rules','10 things to make with marmite'],
    //agrgar metodos que de la misma manera solo se usa un par clave y valor
    // un ejemplo es poner un metodo llamado sesion,la clave sera iniciar y el valor ira para ser una función y dentro ella poner todo lo que soy
    login: function () {
        // consultar el registro del usuario que inicio sesión
        console.log('the user logged in');
    },
    //de esta manera podemos agregar nuevos metodos ejemplo el cierre de la sesión y esto sera una función
    logout: function(){
        console.log('the user logged out');
    },
    //otro metodo que imprime todos los blogs
    logBlogs: function(){

    }
};
//llamar al metodo login y lo vemos en consola

user.login();
//punto de usuario cierra sesión
user.logout();

const name = 'erika';
//objeto de cadena integrado
name.toUpperCase();