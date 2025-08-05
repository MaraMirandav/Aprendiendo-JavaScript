//Hoisting:
// Podemos usar una variable y después declararla (funciona con var)

miVariable = 10; //Inicializamos la variable
console.log(miVariable);

var miVariable; //Declarar la variable

//Con let no funciona: Lanza error
miSegundaVariable = 10; //Inicializamos la variable
console.log(miSegundaVariable);

let miSegundaVariable; //Declarar la variable