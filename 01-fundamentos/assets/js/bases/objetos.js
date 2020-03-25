const obj = {
    nombre:'Rodrigo',
    edad: 21,
    nacimiento: function(){
        return new Date().getFullYear() - this.edad;
    }
}
console.log(obj.nombre, obj.nacimiento());