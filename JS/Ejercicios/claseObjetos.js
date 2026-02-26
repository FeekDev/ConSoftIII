/*const persona = {
    nombre : "Carlos",
    edad: 30,
    ciudad: "Medellin"
}*/

// objetos con metotods

const usuario = {
    nombre : "Ana",
    saludar() {
        return " Hola " + this.nombre;
    }
}

console.log(usuario.saludar)

// destructurar

const producto = {nombre: "laptop", precio: 25000};

const {nombre, precio} = producto;
const copia = {...producto, stock : 10};

console.log(nombre, copia)

// lista de objetos

const estudiantes = [
    {nombre: "Ana", nota: 4.5},
    {nombre: "Luis", nota: 3.5}

];

const aprobados = estudiantes.filter(e => e.nota >= 4)
.map(e => e.nombre);

console.log(aprobados)