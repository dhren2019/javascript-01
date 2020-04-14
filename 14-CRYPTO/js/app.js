const cotizador = new API ('6a0df29be3c8ebb56d344df16abfb1a62bd6a30d3b25bfc43cd25131d19fa8e8')
const ui = new Interfaz();




//Leer formulario

const formulario = document.querySelector('#formulario');

//eventlistener
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    
    //leer la criptomoneda seleccionada
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
    
    //comprobar que las dos esten seleccionadas
    
    if (monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
        //alerta error
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');
        
    } else {
        //todo bien consultar la api
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
        .then(data => {
            console.log(data);
        })
    }

})