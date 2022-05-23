//ARROW FUNCTION

const sumar = (n1,n2) => console.log(n1+n2)
sumar(20,60)

const cuadrado = num => console.log(num*num)
cuadrado(5)

const aprendido = tecnologia => console.log(`Estoy aprendiendo ${tecnologia}`)
aprendido('Javascript')

const operaciones = (n1,n2) =>{
    if(n1>n2){
        console.log('N1 es mayor a N2')
    }

    else{
        console.log('N2 es mayor a N1')
    }
}
operaciones(0,1)