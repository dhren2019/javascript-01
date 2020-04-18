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
}
