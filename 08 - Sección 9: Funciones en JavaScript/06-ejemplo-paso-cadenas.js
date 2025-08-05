//EJEMPLO PASO DE CADENAS:
//Cadenas inmutables: no se pueden modificar su valor

function cambiarValor(parametro) {
    parametro = 'Adiós';
}

//Llamamos a la función:
let argumento = 'Hola';
console.log(`Antes función: ${argumento}`); //Hola
cambiarValor(argumento);
console.log(`Después función: ${argumento}`); //Hola (no funciona)
