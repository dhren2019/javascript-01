//Cotizador 
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

//Todo lo que se muestra
function Interfaz() {}

//Event listener
const formulario = document.getElementById('cotizar-seguro');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    // leer la marca seleccionada del select
    const marca = document.getElementById('marca');
    const marcaSeleccioanda = marca.options[marca.selectedIndex].value;

    // leer el año seleccionado del <select>
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    // lee el valor del radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    console.log(marcaSeleccionada);
    console.log('presionado');

    // Crear instancia de Interfaz
    const interfaz = new Interfaz();

    // Revisamos que los campos no esten vacios
    if(marcaSeleccioanda === '' || anioSeleccionado === '' || tipo === '') {
         // Interfaz imprimiendo un error
        console.log('Faltan datos');
    } else {
        // Limpiar resultados anteriores
        console.log('Todo correcto');
        
         }
})

const max = new Date().getFullYear(),
      min = max - 20;

const selectAnios = document.getElementById('anio');
for(let i = max; i > min; i--) {
     let option = document.createElement('option');
     option.value = i;
     option.innerHTML = i;
     selectAnios.appendChild(option);
}