//ATRIBUTOS ESTÁTICOS:

//Clase Persona (clase padre)
class Persona {
// ------------------------------------------------------------
    //DEFINIENDO VARIABLES O ATRIBUTOS ESTÁTICOS
    //Atributo que pertenece a la clase, no a los objetos
    static contadorObjetosPersona = 0;
// ------------------------------------------------------------

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona ++; //para hacer funcionar el contador
        console.log(`Se incrementa contador: ${Persona.contadorObjetosPersona}`);
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
let empleado2 = new Empleado('James', 'Ovalle', 'Programación'); //Se incrementa contador: 1
let persona1 = new Persona('María', 'Miranda'); //Se incrementa contador: 2

//Al utilizar un objeto junto con la variable estática, nos indica que no podemos acceder a ella, está existe, pero no es posible acceder con la referencia de un objeto
console.log(persona1.contadorObjetosPersona); // undefined

//Al igual que los métodos estáticos, los atributos estáticos funciona si lo llamamos desde la clase
console.log(Persona.contadorObjetosPersona); //0, al crear instancias, aumenta su valor, en este caso a 2.

//El atributo estático se hereda a la clase hija:
console.log(Empleado.contadorObjetosPersona); //0, al crear instancias, aumenta su valor, en este caso a 2. Tambien cuenta a las clases hijas.

