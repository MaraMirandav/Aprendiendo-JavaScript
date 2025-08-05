//IMPRIMIR LOS PRIMEROS 10 NUMEROS DE 3 EN 3:

let maximo = 10, minimo = -10;
console.log('Incrementos de 3 en 3'); //1, 4, 7,10
for(let numero = 1; numero <= maximo; numero += 3) {
    console.log(numero);
}
console.log('Decrementos de 3 en 3'); //1, -2, -5, -8
for(let numero = 1; numero >= minimo; numero -= 3) {
    console.log(numero);
}