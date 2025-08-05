//EJEMPLO PASO DE VALOR:
//Pasando información de tipo primitivo (number, bool, string)

function cambiarValor(parametro) {
    parametro = 20;
}

let argumento = 10;
cambiarValor(argumento);
console.log(argumento); //No afecta el valor del argumento, sigue siendo 10
