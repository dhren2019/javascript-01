/*
Dias de semana abrimos a las 11
findes de semana a las 9
*/
// Entra a un sitio web para consultar si está abierto hoy

// const dia = 1; //0:domingo 1:lunes....
// const horaActual = 10;

// let horaApertura;
// let mensaje; //Está abierto, Está cerrado, hoy abrimos a las....

// if ( dia === 0 || dia === 6 ){
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else {
//     console.log('Dia de semana');
//     horaApertura = 11;
    
// }

// if ( horaActual >= horaApertura ){
//     mensaje = 'Está abierto';
// }else{
//     mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura}`;
    
// }

// console.log({ horaApertura, mensaje});

const elMayor = (a, b) => (a > b) ? a : b;


const tieneMembresia = ( miembro ) => (miembro) ? '2€' : '10€'

console.log( elMayor (20, 15));

console.log(tieneMembresia(false));