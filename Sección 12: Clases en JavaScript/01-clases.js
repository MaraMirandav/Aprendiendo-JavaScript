//CREANDO UNA CLASE:

//No aplica Hoisting: Se debe crear la clase primero, luego se puede crear objetos.
let persona2 = new Persona('James', 'Ovalle'); // Persona is not defined

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
}

//Instanciando un objeto:
// Manda a llamar al constructor para ello.
//Si no se define un constructor, se agrega uno vacio en automático
let persona1 = new Persona('María', 'Miranda');
console.log(persona1);
//Persona { nombre: 'María', apellido: 'Miranda' }

//--------------------------------------------------------
//USANDO GET:
console.log(persona1.nombre); //María

//USANDO SET:
persona1.nombre = 'Elena';
console.log(persona1.nombre); //Elena