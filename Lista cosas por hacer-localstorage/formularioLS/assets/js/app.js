
//Variables
const listaTeets = document.getElementById('lista-tweets');



//Event listeners

eventListeners();

function eventListeners(){
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTeet);

    //Borrar tweets
    listaTeets.addEventListener('click', borrarTweet);
}



//Funciones


//Añadir teet al formulario

function agregarTeet (e){
    e.preventDefault();
    /*
    Sirve para prevenir que la petición que por defecto se realizaría a un servidor, en determinado caso un submit a un formulario o de un botón o de un input, no se realice de tal forma y se pueda interactuar con los datos, ya sea para enviarlos con AJAX o mostrarlos en el DOM.
    */
    
    console.log('Tweeet enviado');
    
    //Leer valor del textarea
    const tweet = document.getElementById('tweet').value;
    console.log(tweet);

    // crear botón borrar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    //Crear elemento y añadirlo a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    //Añade el boton de borrar al tweet
    li.appendChild(botonBorrar);
    //Añade el tweet a la lista
    listaTeets.appendChild(li);
}

function borrarTweet(e){
    e.preventDefault();
    if (e.target.className === 'borrar-tweet') {//
        console.log(e.target.parentElement.remove());
        alert('Tweet eliminado');

    }

    console.log('Diste click en la lista');


}