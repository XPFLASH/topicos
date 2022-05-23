/* //Uso de arreglos: Crear un arreglo
const numero =[5,10,20,50,100];


//Recorrer el arreglo con una funcion normal
console.log('Recorrido con una funcion normal')
numero.forEach(function(value){
    console.log(value);
});


console.log('Recorrido con una funcion normal')

numero.forEach(function(num)
{
    console.log(num)
});

console.log('Recorrido con arrow funtion')

numero.forEach(
    num=>console.log(num)
)


//Agregar elementos al final del arreglo con push
//Agrega 100 al final del arreglo numerico
numero.push(1000)
// Impresion del arreglo en una tabla
console.table(numero)

//Agregar elementos al inicio del arreglo con unshift
//Agregar el -10 y el 0 al inicio del arreglo
numero.unshift(-10)
// Impresion del arreglo en una tabla
console.table(numero)

//Eliminar el ultimo elemento de un arreglo con Pop
let ultimoNumero= numero.pop();
console.log(`El ultimo valor del arreglo fue: ${ultimoNumero}`);
console.table(numero)

//Eliminar el primer elemento del arreglo con shift
let primerNumero = numero.shift()
console.log(`El primer valor en el arreglo fue: ${primerNumero}`)
// Impresion del arreglo de una tabla
console.table(numero) */

const meses  = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

// Eliminar elementos apartir de una posicion
// meses.splice(2,1);
// ...+ Nombre Arreglo (Crear la copia)
let nuevoMeses = ['Diciembre', ...meses, 'Junio'];

//


console.log(nuevoMeses)

