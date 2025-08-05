import { Persona } from "./01-clase-persona.js";

export class Empleado extends Persona {
    static idEmpleado = 1000;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.idEmpleado;
        this._sueldo = sueldo;
    }

    get idEmpleado() {
        return this._idEmpleado;
    }

    get sueldo() {
        return this._sueldo;
    }

    set sueldo(nuevoSueldo) {
        this._sueldo = nuevoSueldo;
    }

    toString() {
        return `${super.toString()}
    - id Empleado = ${this.idEmpleado}
    - Sueldo = € ${this.sueldo}
    --------------------------------------`
    }
}

