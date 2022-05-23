//Fetch API
//Ajax-Permite enviar información al servidor u obtener información de un servidor
//Podemos obtener un archivo o una respuesta de un servidor(Texto o JSON)
//Al igual que en otras APIS Javascript utiliza PROMISIES o ASYNC/AWAIT

//JSON --> JavaScript Object Notation
//Un JSON puede ser creado en cualquier lenguaje y se puede consumir en JavaScript por medio de Fecth API y poderlo mostrar en un sitio web

function obtenerEmpleado() {
    const archivo2 = 'https://mercadito-flutter-default-rtdb.firebaseio.com/products.json';
    const archivo1 = '1.json';
    fetch(archivo1).then(resultado => { return resultado.json() })
        .then(datos => {
            console.log(datos);

            const { empleados } = datos;
            console.log(empleados);

            empleados.forEach(empleados => empleados.datos)
            console.log(empleados)

            empleados.forEach(empleados => {
                console.log(empleados.id, empleados.nombre, empleados.puesto)
            });

        })
}



obtenerEmpleado();
