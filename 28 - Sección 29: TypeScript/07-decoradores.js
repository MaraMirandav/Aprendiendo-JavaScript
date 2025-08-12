"use strict";
//USO DE DECORADORES:
// - Es una función especial que se aplica a clases, métodos, propiedades o parámetros usando el símbolo @.
// - Su función: Modificar o extender el comportamiento de lo que decora — sin cambiar directamente su código.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ¿Para qué sirve?
// - Añadir funcionalidades automáticamente
// - Interceptar o modificar cómo se ejecuta algo
// - Evitar repetir código (como validaciones, logs, permisos)
// - Inyectar dependencias (muy usado en frameworks como Angular o NestJS)
//-----------------------------------------------------------------------------------------
function Saludar(target) {
    //prototype -> modifica al objeto en tiempo de ejecución
    target.prototype.saludos = function () {
        console.log('Hola desde decoradores');
    };
}
// ¿Qué hace ese decorador?
// - @Saludar se aplica a la clase Hola
// - Modifica el prototipo de la clase en tiempo de ejecución
// - Añade un método saludos() que no estaba originalmente
// - Cuando haces hola1.saludos(), ejecuta ese método añadido dinámicamente
let Hola = class Hola {
    constructor() {
    }
};
Hola = __decorate([
    Saludar
], Hola);
// El decorador modifica el prototipo de la clase y le añade un método llamado saludos
// Cuando creas una instancia (hola1) y llamas a saludos(), estás usando ese método añadido dinámicamente
let hola1 = new Hola();
hola1.saludos(); //Este método fue añadido por el decorador
