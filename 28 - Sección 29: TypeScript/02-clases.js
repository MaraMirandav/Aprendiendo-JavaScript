"use strict";
//DEFINIENDO CLASES EN TYPESCRIPT:
class Persona {
    //Constructor:
    constructor(nombre) {
        this._nombre = nombre;
    }
    //Setter y Getter
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    static metodoEstatico() {
        return 10;
    }
}
let persona1 = new Persona('Juan');
console.log(persona1.nombre);
console.log(Persona.metodoEstatico());
