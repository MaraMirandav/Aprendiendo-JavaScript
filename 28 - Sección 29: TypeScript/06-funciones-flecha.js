"use strict";
//FUNCIONES FLECHA EN TYPESCRIPT:
//----------------------------------------------------------
//Ejemplo de una función normal con TypeScript:
let suma = function (a, b) {
    return a + b;
};
console.log(suma(5, 3)); //8
//Mismo ejemplo con función flecha con TypeScript:
let sumarFlecha = (a, b) => {
    return a + b;
};
console.log(sumarFlecha(3, 2)); //5
//Forma simplificada para hacer la misma función flecha con TypeScript:
let sumarFlecha2 = (a, b) => a + b;
console.log(sumarFlecha2(4, 4)); //8
//----------------------------------------------------------
//Ejemplo de una función normal sin parámetros con TypeScript:
let obtenerNombre = function () {
    return 'Juan Pérez';
};
console.log(obtenerNombre()); //Juan Pérez
//Mismo ejemplo con función flecha con TypeScript:
let obtenerNombreFlecha = () => {
    return 'Juan Pérez';
};
console.log(obtenerNombreFlecha()); //Juan Pérez
//Forma simplificada para hacer la misma función flecha con TypeScript:
let obtenerNombreFlecha2 = () => 'Juan Pérez';
console.log(obtenerNombreFlecha2()); //Juan Pérez
