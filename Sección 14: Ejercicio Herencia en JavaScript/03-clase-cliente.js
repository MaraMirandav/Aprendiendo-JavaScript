import { Persona } from "./01-clase-persona.js";

export class Cliente extends Persona {
    static idCliente = 10;

    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.idCliente;
        this._fechaRegistro = new Date();
    }

    get idCliente() {
        return this._idCliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(nuevaFecha) {
        this._fechaRegistro = nuevaFecha;
    }

    toString() {
        const DIA = this.fechaRegistro.getDate();
        const MES = this.fechaRegistro.getMonth() + 1;
        const ANIO = this.fechaRegistro.getFullYear();

        return `${super.toString()}
    - id Cliente = ${this.idCliente}
    - Fecha Registro = ${DIA}/${MES}/${ANIO}
    --------------------------------------`
    }
}

let cliente1 = new Cliente('Paul','McCartney',83);
let cliente2 = new Cliente('Richard','Starkey',85);
console.log(cliente1.toString());
console.log(cliente2.toString());