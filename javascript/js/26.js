// PROMISES

const usuarioAutentificado = new Promise( (resolve, reject) =>{
    const auth = false;
    if(auth){

        resolve('Usuario autentificado'); //EL Promise se cumple
    } else{
        reject('No se puede iniciar sesion'); //El promise no se cumple
    }
 
});

usuarioAutentificado
    .then(resultado =>  console.log(resultado))
    .catch(error => console.log(error));

// En los promise existen 3 valores
//Pending : no se ha cumplido pero tampoco se ha rechazado
// Fulfiled: Ya se cumplio
// Rejected: No se cumplio