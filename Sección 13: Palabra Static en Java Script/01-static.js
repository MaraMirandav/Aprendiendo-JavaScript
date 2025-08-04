//PALABRA STATIC

//Clase Persona (clase padre)
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

    //Método dentro de la clase
    nombreCompleto() {
        return this._nombre + ' ' + this._apellido;
    }
    //Metodo toString
    toString() {
        return this.nombreCompleto();
    }

// ------------------------------------------------------------
//AGREGANDO UN METODO ESTATICO:
//Usamos palabra "static", quiere decir que el metodo se va a asociar con esta clase y no con los objetos que se creen de esta clase
    static saludar() {
        console.log('Saludos desde método static');
    }

    static saludar2(persona) {
        console.log(`Saludos ${persona.nombre} desde método static. Usando una instancia de la clase Persona`)
    }
// ------------------------------------------------------------
}

//Clase Empleado (clase hija):
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

    //Sobreescritura de la clase padre (super)
    nombreCompleto() {
        return super.nombreCompleto() + ', ' + this._departamento
    }
}

//Instanciando un objeto:
let empleado2 = new Empleado('James', 'Ovalle', 'Programación');
let persona1 = new Persona('María', 'Miranda');

//Aunque hayamos creado el objeto de la clase persona, no puede ejecutar los métodos estaticos, recordemos que estos se asocian a la clase, no a los objetos
//persona1.saludar(); // Indica que no es una función, no funciona en este objeto.

//El método estático funciona si lo llamamos desde la clase
Persona.saludar(); // Saludos desde método static (funciona)
Persona.saludar2(persona1); //Saludos María desde método static. Usando una instancia de la clase Persona

//El método estático se hereda a la clase hija:
Empleado.saludar(); //Saludos desde método static
Empleado.saludar2(empleado2); //Saludos James desde método static. Usando una instancia de la clase Persona




