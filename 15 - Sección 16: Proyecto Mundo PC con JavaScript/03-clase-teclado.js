import { DispositivoEntrada } from "./01-clase-dispositivo-entrada.js";

//EJERCICIO MUNDO PC
//---------------------------------------------------------
//Clase Teclado (Clase hija de DispositivoEntrada)
export class Teclado extends DispositivoEntrada {
    static contadorTeclados = 200;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return`
            - ID: ${this.idTeclado}
            - Tipo Entrada: ${this.tipoEntrada}
            - Marca: ${this.marca}
            `
    }
}