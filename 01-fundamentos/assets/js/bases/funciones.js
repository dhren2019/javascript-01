// function saludar(){
//     console.log('Hola mundo');
// }
// saludar();

// //Otra manera de declarar una función

// const saludar2 = function(){
//     console.log('Hola mundo');

// }
// saludar2();



function saludar( nombre ) {
    console.log('Hola' + nombre);
}

const saludar2 = function ( nombre ){
    console.log('Hola'+ nombre);
}


//FUNCIONES DE FLECHA

const saludarFlecha = ( nombre ) => {
    console.log('Hola ' + nombre);
}

saludarFlecha( 'Rodrigo');


//Si la función no tiene un return la función devuelve unfedind

function sumar ( a, b) {
    return a + b;
}

 const sumar2 = (a,b) => {
     return a + b;
 }

//  console.log( sumar2( 2,2));
 function getAleatorio2() {
     return Math.random();
 } 
 
 const getAleatorio = () => Math.random();
 
 console.log( getAleatorio2());
