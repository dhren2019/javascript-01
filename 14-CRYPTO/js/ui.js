class Interfaz {

    constructor(){
        this.init();
    }
    init(){
        this.construirSelect();
    }

    construirSelect(){
        cotizador.obtenerMonedasApi()
            .then(monedas => {
                //Crear un select de opciones
                const select = document.querySelector('#criptomoneda');

                //iterar por los resultados de la api
                for (const [key, value] of Object.entries(monedas.monedas.Data)) {
                    //añadir symbol y el nombre como opciones
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);

                }
            })
    }

    mostrarMensaje (mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        //Seleccionar mensajes
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }
}