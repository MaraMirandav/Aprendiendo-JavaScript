"use strict";
//DEFINIENDO VARIABLES:
// Una vez que inicializamos la variable como string, no podemos cambiar el tipo de dato.
let saludo = 'Hola Mundo desde TypeScript';
//saludo = 10; //da error
saludo = 'Hola Mundo, esta variable es de tipo string';
//Definiendo un number:
let numero;
numero = 10;
//Definiendo tipo Any -> es posible cambiar el tipo de dato:
let cualquierDato;
cualquierDato = 'Soy una cadena';
cualquierDato = 33;
//Usando una constante
const PI = 3.14;
//PI = 3.16; //Da error, ya que es una constante
//FUNCION PARA HACER PRUEBAS:
function saludar() {
    console.log(saludo);
    console.log(numero);
    console.log(PI);
}
saludar();
// let lomis;
// class Persona{
//     private lomis: string;
//     private edad: number;
//     constructor(lomis: string, edad: number){
//       this.lomis = lomis;
//       this.edad = edad;
//     }
//     toString() {
//       return `${this.lomis} ${this.edad}`
//     }
// }
