//MANEJO DE ERRORES:
'use strict';

try {
    let x = 10;
    //miFuncion();
}catch(error) {
    //Se ejecuta solo cuando hay errores, los atrapa
    console.log(error); //ReferenceError: x is not defined / ReferenceError: x is not defined
}finally{ //Este siempre se va ejecutar
    console.log('Termina la revisión de errores'); //Termina la revisión de errores
}

//----------------------------------------------------------------------------------