/* Obtener el documento y el evento de escucha */
document.getElementById("cargar") // Trae el elemento boton del HTML
    .addEventListener("click", function ejecutarPeticion() {

        // Función FETCH
        async function obtenerDatos() {

            let url = "https://jsonplaceholder.typicode.com/users"; //Formato JSON

            try {
                let response = await fetch(url) // Realizamos la petición de los datos
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                /*Obtenemos los datos que se solicitaron en la petición*/
                let result = await response.json().then(data => { // Convertimos la respuesta a formato JSON
                    let lista = document.getElementById("lista"); // Traemos el elemento de la lista del HTML
                    data.forEach(user => { // Recorremos cada usuario del resultado
                        let li = document.createElement("li");
                        li.innerHTML = `
                            <strong>${user.name}</strong><br>
                            Email: ${user.email}<br>
                            Dirección: ${user.address.street}, ${user.address.suite}, ${user.address.city}<br>
                            Teléfono: ${user.phone}<br>
                            Empresa: ${user.company.name}
                        `;
                        lista.appendChild(li);
                    });
                });

            } catch (error) {
                console.error(error.message)
            }
        }

        obtenerDatos(); // Llamar a la función cuando se hace click

    });