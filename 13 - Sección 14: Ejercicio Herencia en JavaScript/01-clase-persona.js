//Clase Persona (Clase Padre)
export class Persona {
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona() {
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(nuevoApellido) {
        this._apellido = nuevoApellido;
    }

    get edad() {
        return this._edad;
    }

    set edad(nuevaEdad) {
        this._edad = nuevaEdad;
    }

    toString() {
        return `Datos:
    - ID = ${this.idPersona}
    - Nombre = ${this.nombre} ${this.apellido}
    - Edad = ${this.edad} años`;
    }

}