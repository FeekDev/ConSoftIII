document.getElementById("cargar").addEventListener("click", function () {

    // API

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            let lista = document.getElementById("lista");
            data.forEach(function (usuario) {
                let li = document.createElement("li");
                li.textContent = usuario.name;
                lista.appendChild(li)
            }
            );
        });
});
