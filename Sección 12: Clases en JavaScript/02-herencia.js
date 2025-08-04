//HERENCIA:

//Clase Persona:
class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this.apellido = apellido;
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
}

//Clase Empleado, que hereda los atributos de persona de manera automatica al usar la palabra extends

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        //Super: llama al constructor de la clase padre
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }
}

//Instanciando un objeto con clase Persona:
let persona1 = new Persona('María', 'Miranda');
console.log(persona1);
//Persona { _nombre: 'María', _apellido: 'Miranda' }

//Instanciando un objeto con clase Empleado:
let empleado1 = new Empleado('James', 'Ovalle', 'Programación');
console.log(empleado1);
//Empleado { _nombre: 'James', _apellido: 'Ovalle', _departamento: 'Programación'}

//Podemos usar get, ya que empleado hereda de persona
console.log(empleado1.nombre); //James

//-------------------------------------------------------
//Herencia de métodos:
//Podemos acceder al metodo de la clase padre y aplicarlo en la clase hija
console.log(empleado1.nombreCompleto());