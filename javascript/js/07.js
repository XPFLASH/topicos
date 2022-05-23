//Invocando la ejecucion estricta de JS
"use strict";

const persona = {
    nombre: 'Ricardo',
    genero: 'Hombre',
    edad: 20
};

const medidas={
    IMC: 21,
    altura: 170,
    peso: 70
}

//Usando el operador ... spread operator

const datosPaciente={...persona, ...medidas};
console.log(datosPaciente)