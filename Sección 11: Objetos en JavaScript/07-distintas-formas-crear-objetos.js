// DISTINTAS FORMAS DE CREAR OBJETOS:


function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email
    //Para agregar el nombre completo, es una función: se deben agregar dentro del constructor para que sean efectivos a varios objetos
    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido;
    }
}

//Objetos:
//Sintaxis más formal, pero no recomendable:
let miObjeto = new Object();

//Sintaxis simplificada, es la más recomendable de usar
let miObjeto2 = {};

//-------------------------------------------------------------
//String:
//Sintaxis más formal, pero no recomendable: Usamos new para crear una cadena o clase de tipo string
let miCadena1 = new String();

//Sintaxis Simplificada: La más recomendada
let miCadena2 = 'Hola';

//-------------------------------------------------------------
//Number:
//Sintaxis más formal, pero no recomendable: Usamos new para crear una clase de tipo number
let miNumero = new Number(1);

//Sintaxis Simplificada: La más recomendada
let miNumero2 = 4;

//-------------------------------------------------------------
//Boolean:
//Sintaxis más formal, pero no recomendable: Usamos new para crear una clase de tipo boolean
let miBoolean = new Boolean(true);

//Sintaxis Simplificada: La más recomendada
let miBoolean2 = false;

//-------------------------------------------------------------
//Array:
//Sintaxis más formal, pero no recomendable: Usamos new para crear un array
let miArray = new Array();

//Sintaxis Simplificada: La más recomendada
let miArray2 = [];

//-------------------------------------------------------------
//Función:
//Sintaxis más formal, pero no recomendable
let miFuncion = new Function();

//Sintaxis Simplificada: La más recomendada
let miFuncion2 = function() {};