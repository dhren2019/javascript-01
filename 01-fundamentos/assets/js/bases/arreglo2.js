

let juegos = ['zelda', 'Mario', 'Chrono', 'juego4'];
console.log('Largo:', juegos.length);//Length sirve para mostrar cuantos elementos tiene el arreglo

let primero = juegos[ 2 - 2]; 
let ultimo = juegos[juegos.length-1];

console.log({primero, ultimo});

juegos.forEach( (elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
});

let nuevaLongitud = juegos.push('xzero');
console.log({ nuevaLongitud, juegos });

nuevaLongitud =  juegos.unshift('Fire Embled');
console.log({nuevaLongitud, juegos});
//Añade un nuevo elemento al principio del array

let borrado = juegos.pop();
console.log(borrado, juegos);

//Pop borra un elemnto del arreglo

let juegosBorrados = juegos.splice(pos, 1);
//A partir de la posición 1 se borrarán dos posiçiones siguientes

console.log({juegosBorrados, juegos});


