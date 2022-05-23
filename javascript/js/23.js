//POO

// Objeto lietral

const producto ={
    nombre: "Tabla",
    precio: 500
}

//Objecto Constructor

// Mayuscula = clase : Minuscula = Metodo o Funcion 
function Producto(nombre, precio){
    this.nombre=nombre
    this.precio=precio
}

const producto2 = new Producto('TV', 5000);
console.log(producto2);

const producto3 = new Producto('TV', 5000);
console.log(producto3);