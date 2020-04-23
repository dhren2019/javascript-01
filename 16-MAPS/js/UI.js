class UI {
    constructor() {

        //instanciar la api
        this.api = new API();

        //crear los markers con layersgroup
        this.markers = new L.LayerGroup();
         // Iniciar el mapa
         this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }
    mostrarEstablecimientos(){

        this.api.obtenerDatos()
            .then(datos => {
                const resultado = datos.respuestaJSON.results;

                //ejecutar funcion para mostrar los pines
                this.mostrarPines(resultado);

            })
    }
    mostrarPines(datos){

        //limpiar markers
        this.markers.clearLayers();

        ////rrecorrer los pines
        datos.forEach(dato => {
            //destructuring
            const {latitude, longitude, calle, regular, premium} = dato;

            //Crear popup
            const opcionesPopUp = L.popup()
                .setContent(`<p>Calle: ${calle}</p>
                <p><b>Regular: $ ${regular}</b></p>
                <p><b>Premium: $ ${premium}</b></p>
                `);
            //agregar el pin
            const marker = new L.marker ([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(opcionesPopUp);
            this.markers.addLayer(marker);

        });
        this.markers.addTo(this.mapa);
    }
    //buscador
    obtenerSugerencias(busqueda){
        this.api.obtenerDatos()
        .then(datos => {
            //obtener los datos
            const resultados = datos.respuestaJSON.results;

            //enviar el json y la busqueda para el filtrado

            this.filtrarSugerencias(resultados, busqueda);
        })
    }
    //filtra las sugerencias en base al input
    filtrarSugerencias(resultado, busqueda){

        /*filtrar con .filtrer
        Trae de un input y extrae los resultados que concuerdan con la busqueda
        */
       const filtro = resultado.filter(filtro => filtro.calle.indexOf(busqueda) !== -1);
       //El -1 solo trae los que no concuerden con la busqueda, o DIFERENTE  a -1  !== para que traiga solo los que concuerden
       console.log(filtro);

        //mostrar los pines
        this.mostrarPines(filtro)
    }

}

