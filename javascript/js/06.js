// Invocando la ejecuccion estricta de JS
"use strict"

//objeto: Modificando, Eliminado, congelando y 
const persona = {
    nombre: 'Ricardo',
    genero: 'Hombre',
    edad: '20'
};

//Agregando una propiedad nuevo al objeto
persona.peso= 70;
console.log(persona)

//Eliminado una propiedad del objeto
delete persona.edad
console.log(persona)

//congelando el objeto
//Object.freeze(persona)
//persona.estatura = 175;

persona.estatura=175;
console.log(persona)

// Sellando el objeto
Object.seal(persona);
persona.nombre = 'Yelena'
console.log(persona)

persona.auto= 'mazda'
console.log(persona);
