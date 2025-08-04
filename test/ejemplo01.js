export class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    toString() {
        return `${this._nombre} ${this._apellido}`
    }
}