//ALCANCE DE VARIABLES

let variableGlobal = 5;

//Modificar el valor:
variableGlobal = 10;

//Definición función:
function miFuncion(variableLocal) {
    console.log(variableLocal); //10
    //Modificamos la variable global
    variableGlobal = 20;
    //No podemos redefinir una variable global (let)
    //let variableGlobal = 30
}

//Llamamos la función:
miFuncion(variableGlobal); //10