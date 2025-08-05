import { Persona } from "./01-clase-persona.js";
import { Empleado } from "./02-clase-empleado.js";
import { Cliente } from "./03-clase-cliente.js";

//PRUEBAS EJERCICIO HERENCIA
//---------------------------------------------------------

//Probando clase Persona:
let persona1 = new Persona('James','Ovalle',30);
let persona2 = new Persona('María Elena','Miranda',33);
console.log(persona1.toString());
console.log(persona2.toString());

//Probando clase Empleado:
let empleado1 = new Empleado('Mimis','Miranda',33, 4000);
let empleado2 = new Empleado('Jimmy','Rampage',30, 5000);
console.log(empleado1.toString());
console.log(empleado2.toString());

//Probando clase Cliente:
let cliente1 = new Cliente('Paul','McCartney',83);
let cliente2 = new Cliente('Richard','Starkey',85);
console.log(cliente1.toString());
console.log(cliente2.toString());