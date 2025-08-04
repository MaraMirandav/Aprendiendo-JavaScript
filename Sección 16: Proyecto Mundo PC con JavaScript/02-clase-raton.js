import { DispositivoEntrada } from "./01-clase-dispositivo-entrada.js";

//EJERCICIO MUNDO PC
//---------------------------------------------------------
//Clase Ratón (Clase hija de DispositivoEntrada)
export class Raton extends DispositivoEntrada {
    static contadorRatones = 100;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return`
            - ID: ${this.idRaton}
            - Tipo Entrada: ${this.tipoEntrada}
            - Marca: ${this.marca}
            `
    }
}