//EJEMPLO PASO POR REFERENCIA:
//Objetos (array) se pasan por referencia

function cambiarValor(parametro) {
    parametro[0] = 20;
}

//Llamamos a la función
let arreglo = [10];
console.log(`Antes función: ${arreglo[0]}`); //10
cambiarValor(arreglo);
console.log(`Después función: ${arreglo[0]}`); //20
