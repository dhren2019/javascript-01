class Interfaz {
    constructor(){
        //inicializa la app
        this.init();
        //leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }

    //metodo para que inicialice la app
    init(){
        //llamar a rest api
        this.imprimirCategorias();
    }

    //imprimir categoriaS
    imprimirCategorias(){
        const listaCategorias = eventBrite.obtenerCategorias()
            .then(categorias => {
                const cats = categorias.categorias.categories;
                //seleccionar el select de categorias
                const selectCategorias = document.getElementById('listado-categorias');

                //recorremos el arreglo e imprimir los objetos
                cats.forEach(cat => {
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name_localized));
                    selectCategorias.appendChild(option);
                })
            })

    }

    //metodo para imprimir mensajes: 2 parametros, mensaje y clases
    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.classList = clases;
        //agregar texto
        div.appendChild(document.createTextNode(mensaje));
        //buscar un child padre
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);
        //eliminar alert depues de 3 segundos
        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000);
    }
    //desaparece el mensaje en caso de que exista
    limpiarMensaje(){
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }
}
