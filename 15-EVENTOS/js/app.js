const eventBrite = new EventBrite();
const ui = new Interfaz();


//Listener al buscador
document.getElementById('buscarBtn').addEventListener('click', (e) =>{
    e.preventDefault();
    
    //leer el texto del input buscar id. evento
    const textoBuscador =document.getElementById('evento').value;
    
    //leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;
    
    //revisar que haya escrito algo escrito en el buscador
    if (textoBuscador != '') {
        // cuando si hay una busqueda
        eventBrite.obtenerEventos(textoBuscador, categoriaSeleccionada);
    } else {
        // mostrar mensaje para que imprima algo
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
    }
})