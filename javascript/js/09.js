const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto']

const carrito=[
    {nombre:'Television', precio: 500},
    {nombre:'Xbox 720', precio: 100},
    {nombre:'Tablet', precio: 200},
    {nombre:'Switch', precio: 2000},
    {nombre:'Reloj Digital', precio: 600},
];

//Preguntar si esta marzo en el array

meses.forEach(function(mes)
{
    if( mes === 'Marzo'){
        console.log('Si esta');
    }
});

//Otra manera de preguntar si hay un elemento en un array

let resultado = meses.includes('Marzo');

//Para buscar en un array con objetos
resultado = carrito.some(
    function(producto){
        return producto.nombre === 'Tablet';
    }
);

console.log(resultado)

resultado = carrito.some(producto => producto.nombre === 'Caja')

console.log(resultado);

// 

/* resultado = carrito.includes('Celular')
console.log(resultado) */

//Contar los precios

resultado = carrito.reduce(
    function(total, producto){
        return total + producto.precio
    },0
);

console.log(resultado);

// 2da Forma de contar los precios
//                              function              return          decimales
resultado = carrito.reduce ((total, producto) => total + producto.precio, 0)
console.log(resultado);

//Filtar elementos

resultado = carrito.filter(
    function(producto){
        return producto.precio <1000
    }
);
console.log(resultado);
//2da Forma
resultado = carrito.filter((producto) =>  producto.precio<1000)
console.log(resultado);

resultado = carrito.filter((producto) =>  producto.nombre ==='Tablet')
console.log(resultado);


