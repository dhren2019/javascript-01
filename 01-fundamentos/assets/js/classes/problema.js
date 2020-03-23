

function Persona(nombre, edad) {
      
    console.log('Se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${ this.nombre} - Edad: ${ this.edad }`);
    }

}

const maria = new Persona ('Maria', 18);
console.log( maria);
maria.imprimir();