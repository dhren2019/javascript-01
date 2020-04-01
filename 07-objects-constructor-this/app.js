// function Cliente (nombre, saldo) {
//     this.nombre = nombre;
//     this.saldo  = saldo;
// }
// //Prototipo que imprime saldo y nombre 
// Cliente.prototype.nombreClienteSaldo = function () {
//     return `Nombre:${ this.nombre}, tu saldo es de ${ this.saldo}`
    
// }
// //Retirar saldo 
// Cliente.prototype.retirarSaldo = function (retiro) {
//     return this.saldo -= retiro;
    
// }
// const cliente1 = new Cliente ('Pedro', 100);
// const cliente2 = new Cliente ('Rodrigo', 600);

// cliente2.retirarSaldo(300);
// console.log(cliente1.nombreClienteSaldo());

// //Banca para empresas
// function Empresa (nombre, saldo, telf, tipo) {
//     Cliente.call(this, nombre, saldo);
//     this.telf = telf;
//     this.tipo = tipo;
    
// }
// Empresa.prototype = Object.create(Cliente.prototype);

// const empresa = new Empresa('Udemy', 100000, 684361736, 'Educacion');
const Cliente = {
    imprimirSaldo: function () {
        return `hola ${ this.nombre} tu saldo es ${this.saldo}`
    },
    retirarSaldo:function (retiro) {
        return this.saldo -= retiro;
    }
}

//Crear el objeto
const rodri = Object.create(Cliente);

rodri.nombre = 'rodri';
rodri.saldo = 1000;
rodri.retirarSaldo(250);
console.log(rodri.imprimirSaldo());