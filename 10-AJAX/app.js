document.getElementById('cargar').addEventListener('click', cargarDatos(

));

function cargarDatos() {
    //Crear el objeto XMLHttpRequest 
    const xhr = new XMLHttpRequest();

    //Añadir una conexión
    xhr.open('GET', 'datos.txt', true);

    //Una vez que carga
    xhr.onload = function(){
        //200: correcto  | 403 : prohibido | 404: no encontrado
        if (this.status === 200) {
            document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    //Enviar el request

    xhr.send();
}