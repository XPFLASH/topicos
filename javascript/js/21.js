// this en JAVA SCRIPT

window.nombre = 'Pedro'
window.total = 50;

const reservacion = {
    nombre: 'Pedro',
    apellido: 'Sola',
    total: 5000,
    pagado: false,

    informacion : function() 
    {
        console.log(this)
        console.log(`El cliente ${reservacion.nombre} reservo y debe pagar ${reservacion.total}`)
    }

}

reservacion.informacion();

const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'Sola',
    total: 5000,
    pagado: false,

    informacion : () =>
    { 
        console.log(this)
        console.log(`El cliente ${this.nombre} reservo y debe pagar ${this.total}`)
    }

}

reservacion2.informacion();