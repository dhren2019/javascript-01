class EventBrite {
    constructor(){
        this.token_auth = 'MJRLIFZEQKYAIH3RPICU';
        this.ordenar = 'date';
    }
    //obtiene las categorias en init
    async obtenerCategorias(){
        //consulta las categorias a la rest api de event brite
        const respuestaCategorias = await fetch (`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        //espera la respuesta de las categorias y devuelve un JSOn
        const categorias = await respuestaCategorias.json();

        //devolvemos el resultado
        return {
            categorias
        }

    }
}