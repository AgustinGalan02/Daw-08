function validarEnteros(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        
        alert('Uno de los parámetros tiene error: ambos parámetros deben ser números.');
        
        return { valido: false, a: NaN, b: NaN };
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        alert('Uno de los parámetros tiene error: ambos parámetros deben ser enteros. Serán redondeados.');
        a = Math.round(a);
        b = Math.round(b);
    }

    return { valido: true, a: a, b: b };
}


function suma(a, b) {
    
    const validacion = validarEnteros(a, b);

    if (!validacion.valido) {
        return NaN;
    }

    return validacion.a + validacion.b;
}

function validateInteger(num) {
    return Number.isInteger(num);
}


let resultado1 = suma(5, 4);
console.log(resultado1); 

let resultado2 = suma(8.9, 3.1);
console.log(resultado2); 

let resultado3 = suma(5, "hola");
console.log(resultado3); 

let resultadoEntero = validateInteger(2);
console.log(resultadoEntero);

