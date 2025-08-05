import { Producto } from "./01-clase-producto.js";
import { Orden } from "./02-clase-orden.js";

//EJERCICIO SISTEMA DE VENTAS
//---------------------------------------------------------
//PRUEBAS:

//Probando clase Producto:
let producto1 = new Producto('Pantalón', 50);
let producto2 = new Producto('Camisa', 15);
let producto3 = new Producto('Cinturón', 20);
let producto4 = new Producto('Falda', 40);
let producto5 = new Producto('Vestido', 30);
let producto6 = new Producto('Pulsera', 10);

console.log(producto1.toString());
console.log(producto2.toString());

//Probando clase Orden:
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
console.log(orden1.toString());

let orden2 = new Orden();
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto5);
console.log(orden2.toString());

let orden3 = new Orden();
orden3.agregarProducto(producto1);
orden3.agregarProducto(producto2);
orden3.agregarProducto(producto3);
orden3.agregarProducto(producto4);
orden3.agregarProducto(producto5);
orden3.agregarProducto(producto6);
console.log(orden3.toString());
