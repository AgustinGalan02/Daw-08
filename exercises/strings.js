const stringTen = "programacion";

// a
const textoMayuscula = stringTen.toUpperCase();
console.log(textoMayuscula);

//b
const textoCincoCaracteres = stringTen.substring(0, 5);
console.log(textoCincoCaracteres);

//c
const textoTresCaracteres = stringTen.substring(stringTen.length - 3);
console.log(textoTresCaracteres);

//d
let textoMayusMinuscula = stringTen.substring(0, 1).toUpperCase() + stringTen.substring(1).toLowerCase();
console.log(textoMayusMinuscula);

//e
const stringTenSpace = "programacion computacion";

let primerEspacio = stringTenSpace.indexOf(' ');

// f
let primeraPalabra = stringTenSpace.substring(0, primerEspacio);

let segundaPalabra = stringTenSpace.substring(primerEspacio + 1);

let resultado = primeraPalabra.substring(0, 1).toUpperCase() + primeraPalabra.substring(1).toLowerCase() + ' ' + segundaPalabra.substring(0, 1).toUpperCase() + segundaPalabra.substring(1).toLowerCase();

console.log(resultado);