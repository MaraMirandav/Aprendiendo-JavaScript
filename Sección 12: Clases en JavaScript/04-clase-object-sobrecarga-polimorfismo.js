//CLASE OBJECT, TOSTRING, SOBREESCRITURA Y POLIMORFISMO:

//Clase Persona:
//Clase OBJECT: Es la clase padre de todas las clases en JavaScript, si no lo indican, lo heredan automáticamente.

class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    //Métodos Set y Get
    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    //Creando un método dentro de la clase
    nombreCompleto() {
        return this._nombre + ' ' + this._apellido;
    }
    //Sobrescritura de metodo toString de la clase padre (Object). Se aplica polimorfismo (multiples formas en tiempo de ejecución). El metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo.
    toString() {
        return this.nombreCompleto();
    }
}

//Clase Empleado:
class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    //Sobreescritura de la clase padre, obtiene el nombre completo y el departamento.
    nombreCompleto() {
        return super.nombreCompleto() + ', ' + this._departamento
    }
}

//Instanciando un objeto con clase Empleado:
let empleado1 = new Empleado('James', 'Ovalle', 'Programación');


//TOSTRING: Imprime todos los atributos del objeto
console.log(empleado1.toString()); //[object Object]

//para solucionar este problema debemos sobreescribir el metodo toString heredado de la clase Object.Prototype
console.log(empleado1.toString()); //James Ovalle, Programación

//POLIMORFISMO:
//Aquí el metodo to String, utiliza el metodo nombreCompleto según la instancia que sea, si es persona, usará el correspondiente a la clase e imprimirá nombre y apellido. Sin embargo, si la instancio es de empleado, utilizará el metodo de esa clase, imprimiendo nombre, apellido y departamento.

let empleado2 = new Empleado('María', 'Miranda', 'Programación');
let persona1 = new Persona('María', 'Miranda');

console.log(empleado2.toString()); //María Miranda, Programación
console.log(persona1.toString()); //María Miranda



