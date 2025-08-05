import { Monitor } from "./04-clase-monitor.js";
import { Teclado } from "./03-clase-teclado.js";
import { Raton } from "./02-clase-raton.js";
import { Computadora } from "./05-clase-computadora.js";
import { Orden } from "./06-clase-orden.js";

//EJERCICIO MUNDO PC
//---------------------------------------------------------
//PRUEBAS:
//Probando clases Monitor:
let monitor1 = new Monitor("Samsung", "27 pulgadas");
let monitor2 = new Monitor("LG", "32 pulgadas");

//Probando clases Teclado:
let teclado1 = new Teclado("USB", "Logitech");
let teclado2 = new Teclado("Bluetooth", "Microsoft");

//Probando clases Ratón:
let raton1 = new Raton("Bluetooth", "Logitech");
let raton2 = new Raton("USB", "HP");

//Probando clase Computadora:
let computadora1 = new Computadora("Gamer Pro", monitor1, teclado1, raton1);
let computadora2 = new Computadora("Computis", monitor2,teclado2,raton2);

//Probando clase Computadora con error:
//let computadoraError = new Computadora("Computadora Error", "Samsung", teclado1, raton1);
//console.log(computadoraError.toString()); //Error, no has ingresado un monitor

//Probando clase Orden:
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

console.log(orden1.mostrarOpciones());
