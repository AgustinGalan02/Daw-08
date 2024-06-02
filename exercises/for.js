const palabras = ['hola', 'mundo', 'javascript', 'whatsapp', 'programación'];

function capitalizeFirstLetter(palabras) {
    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i];
        const palabraMayuscula = palabra.charAt(0).toUpperCase() + palabra.slice(1);
        alert(palabraMayuscula);
    }
}

capitalizeFirstLetter(palabras);

let sentence = '';

for (let i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + ' ';
}

alert(sentence);

const arrayVacio = [];

for (let i = 0; i < 10; i++) {
    arrayVacio.push(i);
}

console.log(arrayVacio);