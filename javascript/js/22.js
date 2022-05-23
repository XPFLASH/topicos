//POO - CLASES
class Vehiculo{

    constructor(numLLantas, numPuertas, color){
        this.numLLantas =numLLantas;
        this.numPuertas =numPuertas;
        this.color      =color;
    }

    describirVehiculo(){
        return `Soy... ${this.numLLantas}`;
    }
}

class Carro{               //Argumentos
    constructor(numLLantas, numPuertas, color, modelo, numCilindros){

        this.numLLantas   =numLLantas;
        this.numPuertas   =numPuertas;
        this.color        =color;
        this.modelo       =modelo;
        this.numCilindros =numCilindros;
    }

    describirCarro(){
        return `Soy un  ${this.modelo} de ${this.numLLantas} llantas y ${this.numPuertas} puertas de color ${this.color} con  ${this.numCilindros} cilindros`;
    }
}

const bici = new Vehiculo(2,0,'Azul'); //Parametros
console.log(bici.describirVehiculo());

const carro1 = new Carro(4,4,'rojo', 'Ferrari 72', 6);
console.log(carro1.describirCarro());