import { Producto } from "./01-clase-producto.js";

//EJERCICIO SISTEMA DE VENTAS
//---------------------------------------------------------
//Clase Orden:
export class Orden {
    //atributos estáticos
    static contadorOrden = 1000;

    //Constantes estáticas
    static get MAX_PRODUCTOS() {
        return 5;
    }

    //CONSTRUCTOR:
    constructor() {
        this._idOrden = ++Orden.contadorOrden;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    //GETTER
    get idOrden() {
        return this._idOrden;
    }

    get productos() {
        return this._productos;
    }

    get contadorProductosAgregados () {
        return this._contadorProductosAgregados;
    }

    //METODO AGREGAR PRODUCTO(PRODUCTO):
    agregarProducto(producto) {
        if (producto instanceof Producto) {
            if(this.productos.length < Orden.MAX_PRODUCTOS) {
                this.productos.push(producto);
                this._contadorProductosAgregados ++;
                console.log(`Producto ${producto.nombre} agregado con éxito. Cantidad = ${this.contadorProductosAgregados} productos`)
            }else {
                console.log('Lo siento, alcanzaste el máximo de productos para agregar a la orden');
            }
        }else {
            console.log('Error, no está agregando un producto');
        }
    }

    //METODO CALCULAR TOTAL():
    calcularTotal() {
        let precioTotal = 0;
        for (let producto of this.productos) {
            precioTotal += producto.precio;
        }
        return precioTotal;
    }

    //METODO IMPRIMIR PRODUCTOS EN EL TOSTRING:
    imprimirProductosInToString() {
        let resumenProductos = '';
        for(let producto of this.productos) {
            resumenProductos += producto.toString();
        }
        return resumenProductos;
    }

    //METODO TOSTRING:
    toString() {
        let resumenProductos = this.imprimirProductosInToString();

        return `
        --------------------------------------
        ORDEN NRO ${this.idOrden}:
        --------------------------------------
        PRODUCTOS: ${resumenProductos}
        CANTIDAD PRODUCTOS: ${this.contadorProductosAgregados} unidades
        --------------------------------------
        TOTAL A PAGAR: € ${this.calcularTotal()}
        --------------------------------------

        `;
    }
}