//FUNCIONES RECURSIVAS:
//1) Una función que se llama a si misma

function miFuncion(valor) {
    miFuncion(valor-1);
}

//2) Debe avanzar hacia un caso base, de lo contrario, caemos en ciclos infinitos:
//miFuncion(n)
//Si n == 1 Entonces: regresa n
//Si no: miFuncion(n-1)

//EJEMPLO DE FUNCIONES RECURSIVAS:
//imprimir 3, 2, 1

function funcionRecursiva(numero) {
    //Caso base
    if(numero == 1) {
        console.log(numero);
    }else {
        console.log(numero);
        funcionRecursiva(numero -1);
    }
}

//Llamamos la función:

funcionRecursiva(3); //Imprime 3, 2, 1