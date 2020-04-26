import { API } from './api.js'
import * as UI from './interfaz.js';
UI.formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();

    //obtener datos del form
    const artista = document.querySelector('#artista').value,
          cancion = document.querySelector('#cancion').value;

          if (artista === '' || cancion === '') {
              //usurios dejan algun campo vacío, muestra el error
              UI.divMensajes.innerHTML = 'Error...Todos los campos son obligatorios';
              UI.divMensajes.classList.add('error');
              
              setTimeout(() => {
                UI.divMensajes.innerHTML = '';
                UI.divMensajes.classList.remove('error');
                  
              }, 3000);
          } else {
              //El form esta completo , realizar consulta a la API
              const api = new API (artista, cancion);
              api.consultarAPI()
                  .then (data => {
                    if (data.respuesta.lyrics) {
                        //la cancion existe
                        const letra = data.respuesta.lyrics;
                        UI.divResultado.textContent = letra;

                        
                    }else {
                        //la cancion no existe
                        UI.divMensajes.innerHTML = 'Error la canción no existe';
                        UI.divMensajes.classList.add('error');
                        
                        setTimeout(() => {
                          UI.divMensajes.innerHTML = '';
                          UI.divMensajes.classList.remove('error');
                          UI.formularioBuscar.reset();
                            
                        }, 3000);

                    }
                });
              
          }
          

});