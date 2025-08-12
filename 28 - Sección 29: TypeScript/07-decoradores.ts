//USO DE DECORADORES:
// - Es una función especial que se aplica a clases, métodos, propiedades o parámetros usando el símbolo @.
// - Su función: Modificar o extender el comportamiento de lo que decora — sin cambiar directamente su código.

// ¿Para qué sirve?
// - Añadir funcionalidades automáticamente
// - Interceptar o modificar cómo se ejecuta algo
// - Evitar repetir código (como validaciones, logs, permisos)
// - Inyectar dependencias (muy usado en frameworks como Angular o NestJS)
//-----------------------------------------------------------------------------------------

function Saludar(target: Function): void {
  //prototype -> modifica al objeto en tiempo de ejecución
  target.prototype.saludos = function():void {
    console.log('Hola desde decoradores');
  }
}
// ¿Qué hace ese decorador?
// - @Saludar se aplica a la clase Hola
// - Modifica el prototipo de la clase en tiempo de ejecución
// - Añade un método saludos() que no estaba originalmente
// - Cuando haces hola1.saludos(), ejecuta ese método añadido dinámicamente

@Saludar
class Hola{
  constructor() {

  }
}

// El decorador modifica el prototipo de la clase y le añade un método llamado saludos
// Cuando creas una instancia (hola1) y llamas a saludos(), estás usando ese método añadido dinámicamente

let hola1: any = new Hola();
hola1.saludos(); //Este método fue añadido por el decorador