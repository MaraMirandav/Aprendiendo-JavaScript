//FUNCIONES:

//1) PROCEDIMIENTO: No regresa ningun valor

//Ejemplo procedimiento
function imprimir(parametro) {
    console.log(parametro); //Imprime, no regresa ningun valor
}

//Llamada del procedimiento:
imprimir(100) //Imprime 100, regresa el control pero no recibe ningun valor

//------------------------------------------------------------

//2) FUNCION: Regresa un valor al terminar de ejecutarse

//Ejemplo función:
function sumar(a, b) {
    let resultado = a + b;
    return resultado; //regresa un valor
}

//Llamada del funcion:
let a = 2, b = 3, c;

c = sumar(a, b);
console.log(c); // resultado de la función, valor 5

//------------------------------------------------------------
//3) TIPOS DE FUNCIONES:
// Funciones definidas por el usuario
// Funciones incorporadas (Built-in)
    // -> Funciones de cadenas de caracter
    // -> Funciones matemáticas
