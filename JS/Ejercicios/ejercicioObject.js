const persona = {
    nombre : "Felipe",
    apellido: "Rios",
    edad: 29,
    "saludo": function() {
        console.log("Hola a todos")
    }
}

// dot notation
console.log(persona.nombre)

// braket / corchetes

console.log(persona["saludo"]);

// call with variable a property
const nombref = "nombre";

console.log(persona[nombref])