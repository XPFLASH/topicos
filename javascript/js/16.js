//Switch

const metodoDePago = 'tarjeta'

switch(metodoDePago){
    case 'tarjeta':
        console.log('Pagastes con tarjeta');
        break;
    default:
        console.log('Aun no has pagado');
        break;
}