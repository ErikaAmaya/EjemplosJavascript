//objet literals

  //hacer un objeto
let user = {
    //propiedades y les damos valores claves
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'chetumal',
    //matriz de diferentes blogs
    blogs:['why mac & cheese rules','10 things to make with marmite']
};
//ya tenemos este objeto usuario hay que registrarlo en la consola
console.log(user);
//si queremos acceder a algun objeto bien podemos usar la notación punto
//y especificamos que objeto
console.log(user.name);
//si queremos sobrescribir algun dato
//user.age = 35; lo comentamos para ver que al no estar la edad queda como 30
console.log(user.age);
//actualizar una propiedad en un objeto y actualizar propiedades usando la notación de corchetes en lugar de la notación de puntos
//accedemos a la propiedad nombre como lo hicimos anteriormente pero ahora usando corchetes
//asi podemos actualizar los valores de las propiedades que quieras
console.log(user['location']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);
