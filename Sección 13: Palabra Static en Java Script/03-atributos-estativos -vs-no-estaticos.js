//ATRIBUTOS ESTÁTICOS VS ATRIBUTOS NO ESTÁTICOS:

//Clase Persona (clase padre)
class Persona {
    //ATRIBUTOS ESTÁTICOS
    static contadorObjetosPersona = 0;
    //-------------------------------------------------------
    //ATRIBUTO NO ESTÁTICO -> Se asocia al objeto, lo definimos fuera del constructor, sin la palabra static
    email = 'Valor default email';
    //-------------------------------------------------------
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

//ACCEDIENDO AL VALOR DEL ATRIBUTO EMAIL:
//Podemos acceder, es un atributo por defecto, corresponde al objeto
console.log(persona1.email); //Valor default email
console.log(empleado2.email); //Valor default email, funciona en clase hija

//Si queremos acceder mediante la clase, no funciona
console.log(Persona.email); //undefined, ya que se ha convertido en un atributo estático creado en el momento y se le está asociando, por ello toma el valor de undefined.

//Sucede lo mismo con la clase hija:
console.log(Empleado.email); //undefined


