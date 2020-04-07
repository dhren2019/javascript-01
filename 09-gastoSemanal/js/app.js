//Variables 
const presupuestoUsuario = prompt('Cual es tu presupuesto semanal');
let cantidadPresupuesto;
console.log(presupuestoUsuario);

//Clases 
//Clase de presupuesto
class Presupuesto {
    constructor( presupuesto ){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }
    //Metodo para ir restando del presupuesto actual
    presupuestoRestante( cantidad = 0){
        return this.restante-=Number(cantidad);
    }
}

//Clase de Interfaz maneja todo lo relacionado con el html 
class Interfaz {
    insertarPresupuesto(cantidad){
        const presupuestoSpan = document.querySelector('pan#total');
        const restanteSpan = document.querySelector('pan#restante');
    }
}

//Listeners
document.addEventListener('DOMContentLoaded', function (ig) {
    if (presupuestoUsuario === null || presupuestoUsuario === '') {
        window.location.reload();
    } else {
        //Instanciar presupuestp
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario); 
        //Instanciar la clase de interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);

        console.warn(cantidadPresupuesto);
    }
})