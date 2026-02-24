// arrow
const suma = (a,b) => a+b;
console.log(suma(5,3));

// callback o parametro

function procesar(numero, operacio) {
    return operacion(numero);
}

const duplicar = n => n * 2;
console.log(procesar(4, duplicar))