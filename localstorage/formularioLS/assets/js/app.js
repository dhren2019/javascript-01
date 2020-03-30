// Variables
 
const listaTweets = document.getElementById('lista-tweets');
 
// Event Listeners
 
eventosEncadenados();
 
 
// Funciones
 
function eventosEncadenados() {
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
    // Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet);
 
    // contenido Cargado 
    document.addEventListener('DOMContentLoaded', localStorageListo);
}
 
function agregarTweet(e) {
 
    e.preventDefault();
    //console.log('Formulario Enviado')
 
    // crear botón borrar
 
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
 
 
    // leer el valor del textarea
 
    const tweet = document.getElementById('tweet').value;
    //console.log(tweet)
 
    // crear elemento
    const li = document.createElement('li');
    li.innerText = tweet;
    // añade el botonBorrar
    li.appendChild(botonBorrar);
    listaTweets.appendChild(li);
 
    
    // agregar Tweet a LocalStorage 
 
    agregarTweetLocalStorage(tweet);
 
}
 
 
function borrarTweet(e) {
    e.preventDefault()
    //console.log('diste click en la lista')
    if(e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
        //console.log(e.target.parentElement.innerText)
    } 
 
}
 
// función que agrega el Tweet a LocalStorage 
 
function agregarTweetLocalStorage(tweet) {
    let tweets;
 
    tweets = obtenerTweetsLocalStorage();
    // añadir nuevo Tweet
    tweets.push(tweet);
    // convertir de string a arreglo para local Storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}
 
// mostrar la información proveniente de LocalStorage
 
function localStorageListo() {
    let tweets;
 
    tweets = obtenerTweetsLocalStorage();
    //console.log(tweets)
 
    tweets.forEach(function(tweet){
        // crear botón borrar
 
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';
 
 
        // crear elemento
        const li = document.createElement('li');
        li.innerText = tweet;
        // añade el botonBorrar
        li.appendChild(botonBorrar);
        listaTweets.appendChild(li);
    })
}
 
// comprueba que haya elementos en localStorage
 
function obtenerTweetsLocalStorage() {
    let tweets;
 
    if(localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
 
    return tweets;
 
}
 
// eliminar Tweet del Local Storage
 
function borrarTweetLocalStorage(tweet) {
    let tweets;
    let tweetBorrado;
    // así se obtiene el tweet a borrar y cortado 
    tweetBorrado = tweet.substring(0, tweet.length - 1);
 
    tweets = obtenerTweetsLocalStorage(); 
 
    tweets.forEach(function(tweet, index){
        if(tweetBorrado === tweet) {
            tweets.splice(index, 1);
        }
    })
 
    localStorage.setItem('tweets', JSON.stringify(tweets));
}
 