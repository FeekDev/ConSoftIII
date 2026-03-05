let usuarios = [
    {id:1, nombre:"Carlos"},
    {id:2, nombre:"Carla"},
    {id:3, nombre:"Carlitos"}
];

let lista = document.getElementById("lista");
usuarios.forEach(function(usuario){
    let li = document.createElement("li");
    li.textContent = usuario.nombre;
    lista.appendChild(li)           
});