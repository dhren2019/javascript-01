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

        //imprime el resultado de la cotización
        mostrarResultado( resultado, moneda, crypto){
           
            //En caso de un resultado anterior, ocultarlo
            const resultadoAnterior = document.querySelector('#resultado > div');
            if (resultadoAnterior) {
                resultadoAnterior.remove();
            }
            const datosMoneda = resultado[crypto][moneda];
            console.log(datosMoneda);
            //Recortar digitos del precio
            let precio = datosMoneda.PRICE.toFixed(2),
                porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2),
                actualizado = new Date (datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-ES');
                //imagen = 
            //Construir el template
            let templateHtml = `
                <div class="card bg-warning">
                    <div class="card-body text-light">
                        <h2 class="card-title">Resultado:</h2>
                        <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $ ${precio}</p>
                        <p>Variación último día: % ${porcentaje}</p>
                        <p>Última vez actualizado: ${actualizado}</p>

                        <img src=${datosMoneda.IMAGEURL}>
                        

                        
                    </div>                
                </div>
            `;

            this.mostrarOcultarSpinner('block');
            setTimeout(() => {
                //Insertar resultado
                document.querySelector('#resultado').innerHTML = templateHtml;
                
                //Ocultar spinner
                
                this.mostrarOcultarSpinner('none');

            }, 3000);
           
        }
        
        //Muestra spinner de carga al enviar los resultados de la cotizacion
        mostrarOcultarSpinner(vista){
            const spinner = document.querySelector('.contenido-spinner');
            spinner.style.display = vista;
        }
}
