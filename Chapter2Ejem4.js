//string templada
 const titulo = 'Adios Alfa'
 const autor = 'Erika Amaya Chuc'
 const likes = 150;

 //concatenando 
 let result= 'Manhwa ' + titulo + ' creado por '+ autor + ' cuenta con '+ likes + ' likes';
 console.log(result);

 //string templada
 let result2= `El Manhwa ${titulo} creado por ${autor} cuenta con ${likes} likes`;
 console.log(result2);

 //html templado
 let html = `
 <h2>${titulo}</h2>
 <p>${autor}</p>
 <span>Este sitio tiene ${likes} likes</span>
 `;
 console.log(html);