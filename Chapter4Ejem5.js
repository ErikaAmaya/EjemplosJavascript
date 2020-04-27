//practice arrow functions
//primer ejemplo
//funcion regular simple
// const greet = function(){
//     return 'Hello world';
// };
//realizar una funcion pero utilizamos parentesis por que no tenemoa ningun parentesis
//flecha
// const greet =() => 'hello, world';
// const result = greet();
// console.log(result); 



// const bill = function(products, tax){
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products [i] + products [i] * tax;
//     }
//     return total;
// }

//segundo ejemplo
//dos parametros
//const bill = function(products, tax)  {
    //variable local
   // let total = 0;
    //ciclo a travez de los productos para poder ver los productos deben ser algun tipo de matriz
   // for (let i = 0; i < products.length; i++){
   //     total += products [i] + products [i] * tax;
    // registro de una dovolución
    //}
    //return total;
//}
const bill = (products, tax)=>{
    let total = 0;
    //ciclo a travez de los productos para poder ver los productos deben ser algun tipo de matriz
    for (let i = 0; i < products.length; i++){
        total += products [i] + products [i] * tax;
    // registro de una dovolució
}
return total;
};
//consola de punto
//parametros de precios y luego iniciar la sesión
console.log(bill([10,15,30],0.2));

