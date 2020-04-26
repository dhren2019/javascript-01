const comprarBoleto = (function(){

    //privado
    let evento = 'conferencia js';


    //publico 
    return {
        mostrarBoleto : function () {
            console.log(evento);
        }    }
})();

comprarBoleto.mostrarBoleto();