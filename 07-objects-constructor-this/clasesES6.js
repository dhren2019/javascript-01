class Cliente {
    constructor(nombre, saldo){
        this.nombre   = nombre;
        this.saldo = saldo;

    }
    imprimirSaldo(){
        return ` ${ this.nombre} tu saldo actual es de ${ this.saldo}`;
    }
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo){

        //Va al constructor padre(cliente) y hereda los datos de nombre y saldo
        super(nombre, saldo);
        //No existen en el ctructor padre
        this.telefono = telefono;
        this.tipo = tipo;
    }
}
const empresa = new Empresa ('Empresa1', 10000, 6484940,'Construccion');
console.log(empresa.bienvenida());