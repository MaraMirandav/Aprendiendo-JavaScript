import { Computadora } from "./05-clase-computadora.js";

//EJERCICIO MUNDO PC
//---------------------------------------------------------
//Clase Orden (Recibe objetos de tipo Computadora)
export class Orden {
    static contadorOrdenes = 1000;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    get computadoras() {
        return this._computadoras;
    }

    //METODO AGREGAR COMPUTADORA:
    agregarComputadora(computadora) {
        if(computadora instanceof Computadora) {
            this.computadoras.push(computadora);
            console.log(`Computadora ${computadora.nombre} agregada con éxito`)
        }else {
            console.log('Error, no está agregando una computadora');
        }
    }

    //METODO PARA IMPRIMIR LAS COMPUTADORAS:
    imprimirComputadorasToString() {
        let detalleComputadoras = '';
        for(let computadora of this.computadoras) {
            detalleComputadoras += computadora.toString();
        }
        return detalleComputadoras;
    }

    //METODO MOSTRAR ORDEN:
    mostrarOpciones() {
        let detalleComputadoras = this.imprimirComputadorasToString();

        return `
        --------------------------------------
        ORDEN NRO ${this.idOrden}:
        --------------------------------------
        PRODUCTOS:
        --------------------------------------
        ${detalleComputadoras}
        --------------------------------------
        `;

    }

}