//EJERCICIO SISTEMA DE VENTAS
//---------------------------------------------------------
//Clase Producto:
export class Producto {
    //atributos estáticos
    static contadorProductos = 0;

    //CONSTRUCTOR:
    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    //GETTER y SETTER
    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }

    //METODO TOSTRING:
    toString() {
        return`
        * ID = ${this.idProducto}
        * Nombre = ${this.nombre}
        * Precio = € ${this.precio}

        --------------------------------------`;
    }
}

let producto1 = new Producto('Pantalón', 200);
let producto2 = new Producto('Camisa', 100);

console.log(producto1.toString());
console.log(producto2.toString());