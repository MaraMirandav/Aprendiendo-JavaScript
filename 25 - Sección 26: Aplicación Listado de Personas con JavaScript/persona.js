//Clase Persona:
export class Persona {
    //Constructor:
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    //Getter y Setter
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
        this._apellido = nuevoApellido
    }

    //METODO TOSTRING:
    toString() {
        return`${this.nombre} ${this.apellido}`;
    }
}
