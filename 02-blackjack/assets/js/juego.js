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
        // console.log( deck );
        deck = _.shuffle( deck );
        console.log( deck );
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

    console.log(deck);
console.log( carta );//Carta debe de ser de la baraja

    return carta;
}

for ( let i = 0; i <= 100; i++ ){
    pedirCarta();
    
}
