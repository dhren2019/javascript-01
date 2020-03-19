let personaje = {
    nombre: ' Tony stark',
    codeName: 'Iron Man',
    vivo: false,
    edad:40,
    coords: {
        lat:34.034,
        lng:-118.70
    },
    trajes: [' Mark 1', ' Mark V', ' Hulkbuster'],
    direccion:{
        zip:'10880, 90265',
        ubicación:'Malibu,California'
    },
    ultimaPelicula: 'infinity war'
};

console.log(personaje);
console.log('Nombre', personaje['nombre']);
console.log('Edad',personaje.edad);
console.log('Coords', personaje.coords);
console.log('Numero de trajes de Iron Man', personaje.trajes.length);
console.log('Último traje de Iron Man es:', personaje.trajes[personaje.trajes.length-1]);


//Como borrar una propiedad
delete personaje.edad;

//Trabajar el objeto como si fuera un array
const entriesPersonajes = Object.entries( personaje);
console.log(entriesPersonajes);

//Crear una nueva propiedad
personaje.casado = true;



