const numeros = [1,2,3,4,5]

//map

const cuadrados = numeros.map(n => n **2);
console.log(cuadrados);
const pares = numeros.filter(n => n % 2 === 0)
console.log(pares)

const sumaTotal = numeros.reduce((acc,n) => + n, 0);
console.log(sumaTotal);