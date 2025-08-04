//FUNCIONES FLECHA:

//Funciones como la hemos trabajado hasta el momento:
function miFuncion() {
    console.log('Saludos desde mi función');
}

miFuncion(); //Saludos desde mi función

//------------------------------------------------------------------------
//Función anónima -> Podemos asignar una función a una variable
let miFuncion2 = function() {
    console.log('Saludos desde mi función anónima');
}

miFuncion2(); //Saludos desde mi función anónima

//------------------------------------------------------------------------
//Funciones flecha -> Forma más concisa de escribir funciones anónimas, para funciones simples
// No agregamos la palabra reservada function, solo usamos los parentesis y la flecha
//NO aplica hoisting, ya que usamos let para asignar la variable.
let miFuncionFlecha = () => {
    console.log('Saludos desde mi función flecha');
}

miFuncionFlecha(); //Saludos desde mi función flecha

//------------------------------------------------------------------------
