//EJERCICIO MUNDO PC
//---------------------------------------------------------
//Clase Monitor
export class Monitor {
    static contadorMonitores = 300;

    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    get marca() {
        return this._marca;
    }

    set marca(nuevaMarca) {
        this._marca = nuevaMarca;
    }

    get tamaño() {
        return this._tamaño;
    }

    set tamaño(nuevoTamaño) {
        this._tamaño = nuevoTamaño;
    }

    toString() {
        return`
            - ID: ${this.idMonitor}
            - Marca: ${this.marca}
            - Tamaño: ${this.tamaño}
            `
    }
}