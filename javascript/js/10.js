//Funciones

//function + nombre funcion (argumentos)
//Nan = Not a number

//Declaracion de Funcion se puede poner en cualquier parte del archivo
function sumar1(a,b){
    console.log(a+b);
}

sumar1('Hola','Mundo')
sumar1('Hola',1)
sumar1(20,30)

//Expresion de función solo debajo de la funcion
const suma2 = function(){
    console.log(10+10);
}

suma2();

//Funciones IIFE

(function(){
    console.log('Esta es una funcion que se ejecuta sola');
})();

console.log(cliente)