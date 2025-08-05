//MANEJO DE ERRORES -> Throw:
'use strict';

let resultado = '';

try {
    if(isNaN(resultado)) throw 'No es un número'; //Para lanzar mis propios errores
    else if(resultado === '') throw 'Es una cadena vacía';
} catch(error) {
    console.log(error); //Es una cadena vacía
    console.log(error.name); //undefined
    console.log(error.message); //undefined
} finally {
    console.log('Finaliza revisión de errores');
}

//----------------------------------------------------------------------------------
let resultado2 = 'Hola';

try {
    if(isNaN(resultado2)) throw new Error('No es un número'); //Para lanzar mis propios errores
} catch(error) {
    console.log(error); //No es un número
    console.log(error.name); //Error
    console.log(error.message); //No es un número
}finally {
    console.log('Finaliza revisión de errores');
}

//----------------------------------------------------------------------------------
let resultado3 = 'Hola';

try {
    x = 10;
    if(isNaN(resultado3)) throw 'No es un número'; //Para lanzar mis propios errores
} catch(error) {
    console.log(error); //ReferenceError: x is not defined
    console.log(error.name); //ReferenceError
    console.log(error.message); //x is not defined
}finally {
    console.log('Finaliza revisión de errores');
}