//EJERCICIO ACUMULADOR SUMA:
//Realizar la suma de los primeros 5 numeros utilizando un ciclo for.

//Con ciclo FOR:
let resultados = 0
for (let numero = 1; numero <= 5 ; numero++) {
    console.log(`${resultados} + ${numero} = ${resultados += numero}`);
}
console.log(`Resultado final = ${resultados}`);

//Con ciclo WHILE:
let numero1 = 1, maximo = 5, resultados1 = 0;
while(numero1 <= maximo) {
    console.log(`${resultados1} + ${numero1} = ${resultados1 += numero1}`);
    numero1++;
}
console.log(`Resultado final = ${resultados1}`);

//Con ciclo DO-WHILE:
let numero2 = 1, maximo1 = 5, resultados2 = 0;
do{
    console.log(`${resultados2} + ${numero2} = ${resultados2 += numero2}`);
    numero2++;
}while(numero2 <= maximo1);
console.log(`Resultado final = ${resultados2}`);