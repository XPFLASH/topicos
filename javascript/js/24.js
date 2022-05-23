//Herencia

class Vehiculo {

    constructor(numLLantas, numPuertas, color){
        this.numLLantas =numLLantas;
        this.numPuertas =numPuertas;
        this.color      =color;
    }

    describirVehiculo(){
        return `Soy un carro de ${this.numLLantas} llantas y ${this.numPuertas} puertas de color ${this.color}`;
    }
}

class Carro extends Vehiculo{               //Argumentos
    constructor(numLLantas, numPuertas, color, modelo, numCilindros){
        super(numLLantas,numPuertas,color)
        this.modelo       =modelo;
        this.numCilindros =numCilindros;
    }

    describirVehiculo(){
        return `Soy un  ${this.modelo} de ${this.numLLantas} llantas y ${this.numPuertas} puertas de color ${this.color} con  ${this.numCilindros} cilindros`;
    }
}


const carro1 = new Carro(4,4,'rojo', 'Ferrari 72', 6); //Parametros
console.log(carro1.describirVehiculo());

const carro2 = new Carro(4,4,'azul', 'Chevi 04´', 4); //Parametros
console.log(carro2.describirVehiculo());
