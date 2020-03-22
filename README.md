# javascript

````
Se añade carpeta blackjack y readme a carpeta 01

````
Se añaden cartas a carpeta blackjack
 ```

 Evento pedir carta
 btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();//Carta = pedircarta que saca una carta de la baraja
    //Cuantos puntos va sumando el player

    puntosPlayer = puntosPlayer + valorCarta( carta);


    puntosHTML[0].innerHTML = puntosPlayer;
    //Muestra los puntos del jugador en el small y el [0] es porque se imprime en el primer small

    
});
````