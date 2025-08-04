//FUNCIONES CALLBACK:
//Es una función que se pasa como parámetro a otra función, y dentro de una función vamos a podemos llamar a otra función

//Realizamos funciones simples para ver el flujo de uso de callback
function miFuncion1() {
    console.log('Probando mi función 1');
}

function miFuncion2() {
    console.log('Probando mi función 2');
}

//Se ejecutan de manera secuencial a como lo hemos llamado
miFuncion1();
miFuncion2();

//------------------------------------------------------------------------
//Funcion de tipo Callback:

//1) Función que vamos a pasar como argumento en el Callback
let imprimir = function imp(mensaje) {
    console.log(mensaje);
}

//2) Función en donde usamos callback
function sumar(op1, op2, funcionCallback) { //incluimos la función
    let resultado = op1 + op2;
    funcionCallback(`Resultado: ${resultado}`); //Aquí se manda a llamar la función callback, en este caso para que imprima
}

//3) Se llama a la función Sumar, se pasa como parámetro dos valores y la función imprimir, solo el nombre
sumar(5,3,imprimir); //Resultado: 8