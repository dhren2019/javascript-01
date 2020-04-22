function crearCarrito(carrito) {
    //iniciamos el indice
    let i = 0;
    return{
        siguiente: () => {
            let fin = (i >= carrito.length);
            let valor = !fin ? carrito [i++] : undefined;

            return {
                fin: fin,
                valor:valor
            }
        }
    }
}
const carrito = ['producto 1','producto 2','producto 3','producto 4',];
const recorrerCarrito = crearIterador (carrito);
console.log(recorrerCarrito.siguiente());

//GENERADORES
function *nuevoGenerador(paramscarrito) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];
        
    }
}

//Creamos el carrito
const carrito = ['producto 1','producto 2','producto 3','producto 4',];

//recorremos el iterador
let iterador = nuevoGenerador(carrito);

console.log(iterador.next().value);
