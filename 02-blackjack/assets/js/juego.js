/**
 * 2C = two of clubs
 * 2D = two fiamonds
 * 2H = two hearts
 * 2S = two spades
 * 
 */

 let deck = [];

 const tipos = ['C', 'D', 'H', 'S'];
 const especiales = ['A', 'J', 'Q', 'K'];

 //Cuantos puntos va sumando jugador y banca
 let puntosPlayer = 0,  //Se inician en 0
    puntosBanca = 0

 //Referencias html
 const btnPedir = document.querySelector('#btnPedir');
const puntosHTML =  document.querySelectorAll('small');
 
 //Esta función crea una nueva baraja
 const crearDeck = () => {
     
     /*i = 2 porque las cartas comienzan en 2
     *i <= es el numero mayor de las cartas
     y se incrementa en 1
     */
    for ( let i = 2; i <= 10; i++){

        for( let i = 2; i <= 10; i++ ) {
            for( let tipo of tipos ) {
                deck.push( i + tipo);
            }
        }
    
        for( let tipo of tipos ) {
            for( let esp of especiales ) {
                deck.push( esp + tipo);
            }
        }
        deck = _.shuffle( deck );
        // console.log( deck );
        return deck;
    }
}
  
 crearDeck();

 //Esta función permite tomar una carta

const pedirCarta = () => {

    if( deck.length === 0){
        throw 'No hay cartas en la baraja';
    }

    const carta = deck.pop();
    //Elimina la última carta de la baraja

    // console.log(deck);
// console.log( carta );//Carta debe de ser de la baraja

    return carta;
}
// pedirCarta();
const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);

    return ( isNaN( valor)) ?
            ( valor === 'A') ? 11 : 10
            : valor * 1;
            //Si ni es una letra quiere decir que es un número * 1

    //Si es un numero entonces pregunta por el VALOR y sino lo es

    //     //isNaN = is not a number y evalúa lo que hay en el paréntesis y dice si es un numero
     //     //OPERADOR TERNARIO
    //     puntos = ( valor === 'A' ) ? 11 : 10;
    //     //Si el valor es igual a A entonces vale 11 sino vale 10
}
 

//Eventos

btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();//Carta = pedircarta que saca una carta de la baraja
    //Cuantos puntos va sumando el player

    puntosPlayer = puntosPlayer + valorCarta( carta);


    puntosHTML[0].innerHTML = puntosPlayer;
    //Muestra los puntos del jugador en el small y el [0] es porque se imprime en el primer small
});


