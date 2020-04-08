//Variables 
const presupuestoUsuario = prompt('Cual es tu presupuesto semanal');
const formulario = document.getElementById('agregar-gasto')
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
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        //Insertar al html
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }

    imprimirMensaje(mensaje, tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-error', 'alert');
        
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            
            divMensaje.classList.add('alert-success');
        }
        divMensaje.appendChild(document.createTextNode(mensaje));

        //Insertar en el DOM
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        //Quitar alert despues de 3s
        setTimeout(() => {
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        }, 3000);
    }
    //Inserta los gastos a la lista
    agregarGastoListado(nombre, cantidad){
        const gastoListado = document.querySelector('#gastos ul')

        //Crear un li
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        //Insertar el gasto
        li.innerHTML = `
            ${nombre}
           <span class="badge badge-primary badge-pill"> ${cantidad}</span>

        `;

        //Insertar al html
        gastoListado.appendChild(li);
    }

    //Comprueba el presupuesto restante
    presupuestoRestante(cantidad){
        const restante = document.querySelector('span#restante');
        //Leemos el presupuesto restante
        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);
        
        restante.innerHTML=`${presupuestoRestanteUsuario}`;
        this.comprobarPresupuesto();
    }

    //Cambiar color el presupuesto restante
    comprobarPresupuesto(){
        const presupuestoTotal    = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;

        //Comprobar el 25% gasto
        if ( (presupuestoTotal / 4) > presupuestoRestante) {
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add('alert-danger');
        } else if( (presupuestoTotal / 2) > presupuestoRestante) {
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
            
        }

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

    }
})

formulario.addEventListener('submit',function (e) {
    e.preventDefault();
    
    
    //Leer del formulario de gastos
    const nombreGasto  = document.querySelector('#gasto').value;
    const cantidadGasto  = document.querySelector('#cantidad').value;

    //Insttanciar la interfaz
    const ui = new Interfaz();

    //Comprobar que los campos no estén vacíos
    if (nombreGasto === '' || cantidadGasto === '') {

        //Dos parametros:mensaje y tipo
        ui.imprimirMensaje('Hubo un error', 'error');
    } else {
        //Insertar en el html
        ui.imprimirMensaje('Correcto', 'correcto');
        ui.agregarGastoListado(nombreGasto, cantidadGasto);
        ui.presupuestoRestante(cantidadGasto)
    }
})