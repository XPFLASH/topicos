// Foreach

const carrito = [
    { nombre: 'Television', precio: 500 },
    { nombre: 'Xbox 720', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Switch', precio: 2000 },
    { nombre: 'Reloj Digital', precio: 600 },
];

// forEach
const arreglo1 = carrito.forEach(producto => producto.nombre);
console.log(arreglo1)

console.log('--------------------------')
// map
const arreglo2 = carrito.map(producto => producto.nombre);
console.log(arreglo2)

//Foreach me sirve solamente si quiero recorrer un arreglo (no sirve para regresar informacion)
// Map me da una posibilidad de sacar informacion para convertirlo en otro arreglo (genera un arreglo nuevo)

const arreglo3 = carrito.map(producto => `${producto.nombre}-${producto.precio}`);
console.log(arreglo3)