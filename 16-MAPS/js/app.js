const ui = new UI;

document.addEventListener('DOMContentLoaded', () => {
    ui.mostrarEstablecimientos();
})

//habilitar busqueda de establecimientos
const buscador = document.querySelector('#buscar input');
buscador.addEventListener('input', ()=> {
    if (buscador.value.length > 4) {
        //buscar en la api
        ui.obtenerSugerencias(buscador.value);
    }else {
        //cuando borras lo que hay en el input hace que aparezcan todos los pines de nuevo
        ui.mostrarEstablecimientos();
    }

})