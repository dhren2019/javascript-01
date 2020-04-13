// async function obtenerClientes() {
//     //Crear Promise
//     const clientes = new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Clientes descargados...`);
//         }, 2000);
//     });

//     //Error o no
//     const error = false ;
//     if (!error) {
//         const respuesta = await clientes;
//         return respuesta;
//     }else{
//         await Promise.reject(`Hubo un error...`);
//     }
// }

// obtenerClientes()
//     .then(res => console.log(res));
//     .catch(error =>  console.log(error) )


//EJEMPLO CON UNA API

async function leerTodos() {
    //Esperar la respuesta
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');

    //Cuando la respuesta está hecha
    const datos = await respuesta.json();
    
    return datos;

}
leerTodos()
    .then ( usuarios => console.log(usuarios))