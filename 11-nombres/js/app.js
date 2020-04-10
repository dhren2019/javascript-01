document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

//Llamado a ayax e imprimir resultados
function cargarNombres(e) {
    e.preventDefault();

    //Leer las variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    
    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;
    
    const cantidad = document.getElementById('numero').value;

    let url = '';
    url += 'https://uinames.com/api/?'

    //Si hay origen agregarlo a la url
    if (origenSeleccionado !== '') {
        url += `region=${origenSeleccionado}&`;
    }
    
    
    //Si hay un genero agregarlo a la url
    if (origenSeleccionado !== '') {
        url += `gender=${origenSeleccionado}&`;
    }

    
    //Si hay una cantidad agregarlo a la url
    if (cantidad !== '') {
        url += `amount=${cantidad}&`;
    }
    //Conectar con ayax
    const xhr = new XMLHttpRequest();
    //Abrir conexion
    xhr.opne('GET', url, true);
    xhr.onload = function () {
        if (this.status === 200 ) {
            const nombres = JSON.parse(this.responseText);
            let htmlNombres = '<h2>Nombres generados</h2>';
            htmlNombres += '<ul class= "lista">'

            nombres.forEach(function(nombre){
                htmlNombres+=`
                <li>${nomnre.name}</li>
                
                `;

            })
            htmlNombres += '</ul>';
            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }

}