const comprarBoleto = (function(){

    //privado
    let evento = 'conferencia js';
    const adquirirBoleto = () => {
        const elemento = document.createElement('p');
        elemento.textContent = `Comprando entrada para ${evento}`;
        document.querySelector('#app').appendChild(elemento);
}



    //publico 
    return {
        mostrarBoleto : function () {
            adquirirBoleto();
        }    }
})();

comprarBoleto.mostrarBoleto();
