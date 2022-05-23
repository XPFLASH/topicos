//Objetos: Acceso a datos por propiedad vs Destructuring

const persona = {
    nombre: 'Ricardo',
    genero: 'Hombre',
    edad: '20'
};

//Acesso a datos por propiedad
//Forma 1
persona.nombre;
persona.genero;

console.log(persona.nombre)
console.log(persona.genero)
//Forma 2

console.log('Forma 2 de acesar a los datos')
console.log(persona["nombre"])

const edadPersona = persona['edad'];
console.log(edadPersona)

// ACESSO A DATOS USANDO DESTRUCTURING

const { nombre, genero, edad } = persona;
console.log(nombre)

//Agregar propiedad al objeto

persona.peso = 70;
console.log(persona)