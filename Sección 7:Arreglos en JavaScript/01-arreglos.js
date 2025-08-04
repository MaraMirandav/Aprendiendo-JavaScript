//ARREGLOS:
let numerosArreglo = [];

//Modificar los valores:
numerosArreglo[0] = 13;
numerosArreglo[1] = 21;
numerosArreglo[4] = 'Hola';

//Leer los valores:
console.log(`Elemento 1 - [0]: ${numerosArreglo[0]}`);
console.log(`Elemento 2 - [1]: ${numerosArreglo[1]}`);
console.log(`Elemento 3 - [2]: ${numerosArreglo[2]}`);
console.log(`Elemento 5 - [4]: ${numerosArreglo[4]}`);

//SINTAXIS SIMPLIFICADA DE LOS ARREGLOS
let numerosArreglo1 = [13, 21, 0, 0, 62];

//Leer los valores:
console.log(`Elemento 1 - [0]: ${numerosArreglo1[0]}`);
console.log(`Elemento 2 - [1]: ${numerosArreglo1[1]}`);
console.log(`Elemento 3 - [2]: ${numerosArreglo1[2]}`);
console.log(`Elemento 5 - [4]: ${numerosArreglo1[4]}`);

//Leer los valores con un ciclo FOR:
for(let i = 0; i < numerosArreglo1.length; i++){
    console.log(`Arreglo[${i}] = ${numerosArreglo1[i]}`);
}