//EJEMPLO STATIC:

//Clase Persona (clase padre)
class Persona {
    //ATRIBUTOS:
    static contadorPersonas = 0;

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas;
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
        return this.idPersona + ') ' + this._nombre + ' ' + this._apellido;
    }
    //Metodo toString
    toString() {
        return this.nombreCompleto();
    }

// METODO ESTATICO:
    static saludar() {
        console.log('Saludos desde método static');
    }

    static saludar2(persona) {
        console.log(`Saludos ${persona.nombre} desde método static. Usando una instancia de la clase Persona`)
    }
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
let persona1 = new Persona('María', 'Miranda');
console.log(persona1.toString()); //1) María Miranda

let empleado2 = new Empleado('James', 'Ovalle', 'Programación');
console.log(empleado2.toString()); //2) James Ovalle, Programación

//Para saber la cantidad de personas: Funciona con las clases padre e hijas
console.log(Persona.contadorPersonas); //2

let persona2 = new Persona('Ikigai', 'O');
console.log(persona2.toString()); //3) Ikigai O
console.log(Persona.contadorPersonas); //3