//MATRICES:
//Declaración de una matriz:
let matriz = [[],[]];

//Modificar los valores:
//Reglon 0:
matriz[0][0] = 100;
matriz[0][1] = 200;
matriz[0][2] = 300;

//Reglon 1:
matriz[1][0] = 400;
matriz[1][1] = 500;
matriz[1][2] = 600;

//Imprimir matriz:
console.log(`Elemento [0][0] = ${matriz[0][0]}`);
console.log(`Elemento [0][1] = ${matriz[0][1]}`);
console.log(`Elemento [0][2] = ${matriz[0][2]}`);
console.log(`Elemento [1][0] = ${matriz[1][0]}`);
console.log(`Elemento [1][1] = ${matriz[1][1]}`);
console.log(`Elemento [1][2] = ${matriz[1][2]}`);

//SINTAXIS SIMPLIFICADA DE MATRICES:
let matriz2 = [[200, 400, 600],[800, 1000, 1200]];
console.log(`Elemento [0][0] = ${matriz2[0][0]}`);
console.log(`Elemento [0][1] = ${matriz2[0][1]}`);
console.log(`Elemento [0][2] = ${matriz2[0][2]}`);

//Leer los valores de la matriz con un ciclo FOR:
for (let i = 0; i < matriz2.length; i++) { //Filas
    for (let j = 0; j < matriz2[i].length; j++) { //Columnas
        console.log(`Elemento [${i}][${j}] = ${matriz2[i][j]}`);
    }
}