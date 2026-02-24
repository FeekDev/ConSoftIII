edad = 23

if (edad >= 18) {
    console.log("Mayor de edad")
}

// Switc

let dia = 3
switch (dia) {
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    default:
        break;
}

//for

for (let i = 0; i < 5; i++) {
    console.log(4)
}

// while

let i = 0
while (i < 3) {
    console.log(i)
}

let frutas = ["manzana", "pera", "uva"];

for (let fruta of frutas) {
    console.log(fruta);
}

for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
    
}