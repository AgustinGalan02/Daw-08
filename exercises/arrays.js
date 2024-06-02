//a
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log(meses[5] + " y " + meses[11]); // lo tome como el numero que ocupa en el array, no el numero del mes en si.

//b
console.log(meses.sort());

//c
meses.unshift("hola");
meses.push("chau");
console.log(meses);

//d
meses.shift("hola");
meses.pop("chau");
console.log(meses);

//e
meses.reverse();
console.log(meses);

//f
const mesesJoin = meses.join("-");
console.log(mesesJoin)

//g
const mesesSlice = meses.slice(4, 11);
console.log(mesesSlice);
