//SOBREESCRITURA:

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

//Clase Empleado, que hereda los atributos de persona:
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

    //Sobreescritura: Modificar el comportamiento de un metodo  definido en la clase padre (mismo nombre)
    nombreCompleto() {
        return super.nombreCompleto() + ', ' + this._departamento
        //con super llamamos al metodo definido en la clase padre para no volver a escribir todo nuevamente.
    }
}

//Instanciando un objeto con clase Empleado:
let empleado1 = new Empleado('James', 'Ovalle', 'Programación');
console.log(empleado1.nombreCompleto()); //James Ovalle, Programación