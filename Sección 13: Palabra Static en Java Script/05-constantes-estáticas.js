//CONSTANTES ESTATICAS:

//Clase Persona (clase padre)
class Persona {
    //ATRIBUTOS:
    static contadorPersonas = 0;
    //------------------------------------------------------------
    //Método que simula una constante estática:
    //Como definimos un método get, podemos obtener el valor
    static get MAX_OBJ() {
        return 5;
    }
    //------------------------------------------------------------

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        //Usamos la "constante estática"
        if(Persona.contadorPersonas < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorPersonas;
        }else {
            console.log(('Se ha superado la cantidad máxima de objetos a crear'));
        }
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

let empleado1 = new Empleado('James', 'Ovalle', 'Programación');
console.log(empleado1.toString()); //2) James Ovalle, Programación

//Para saber la cantidad de personas: Funciona con las clases padre e hijas
console.log(Persona.contadorPersonas); //2

let persona2 = new Persona('Ikigai', 'O');
console.log(persona2.toString()); //3) Ikigai O
console.log(Persona.contadorPersonas); //3

//------------------------------------------------------------
//Usando la constante estática:
console.log(Persona.MAX_OBJ) //5
Persona.MAX_OBJ = 10; //no la modifica, es estática
console.log(Persona.MAX_OBJ) //5

//Creamos dos objetos mas:
let persona3 = new Persona('Mimis', 'Miranda');
console.log(persona3.toString()); //4) Mimis Miranda
let empleado2 = new Empleado('Jimcito', 'Rampage', 'Programación');
console.log(empleado2.toString()); //5) Jimcito Rampage, Programación
let empleado3 = new Empleado('Marita', 'Rampage', 'Programación'); //Se ha superado la cantidad máxima de objetos a crear

