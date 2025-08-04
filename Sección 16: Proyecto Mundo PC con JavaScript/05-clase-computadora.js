import { Monitor } from "./04-clase-monitor.js";
import { Teclado } from "./03-clase-teclado.js";
import { Raton } from "./02-clase-raton.js";

//EJERCICIO MUNDO PC
//---------------------------------------------------------
//Clase Computadora (Recibe objetos de tipo Ratón, Teclado y Monitor)
export class Computadora {
    static contadorComputadoras = 400;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        if(monitor instanceof Monitor) {
            this._monitor = monitor;
        }else {
            console.log('Error, no has ingresado un monitor');
        }
        if(teclado instanceof Teclado) {
            this._teclado = teclado;
        }else {
            console.log('Error, no has ingresado un teclado');
        }
        if(raton instanceof Raton) {
            this._raton = raton;
        }else {
            console.log('Error, no has ingresado un ratón');
        }
    }

    get idComputadora() {
        return this._idComputadora;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get monitor() {
        return this._monitor;
    }

    set monitor(nuevoMonitor) {
        this._monitor = nuevoMonitor;
    }

    get teclado() {
        return this._teclado;
    }

    set teclado(nuevoTeclado) {
        this._teclado = nuevoTeclado;
    }

    get raton() {
        return this._raton;
    }

    set raton(nuevoRaton) {
        this._raton = nuevoRaton;
    }

    toString() {
        return`
        DETALLE COMPUTADORA ID ${this.idComputadora}:
        * Nombre: ${this.nombre}
        * Monitor: ${this.monitor.toString()}
        * Teclado: ${this.teclado.toString()}
        * Ratón: ${this.raton.toString()}
        `
    }
}