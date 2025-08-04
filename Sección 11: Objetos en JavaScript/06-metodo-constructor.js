// MÉTODO CONSTRUCTOR Y AGREGANDO METODOS:
//Permite crear más objetos y no uno solo como lo veniamos desarrollando anteriormente

function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email
    //Para agregar el nombre completo, es una función: se deben agregar dentro del constructor para que sean efectivos a varios objetos
    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido;
    }
}

//INSTANCIANDO:
let padre = new Persona('Juan', 'Miranda', 'juan@gmail.com');
console.log(padre);
//Persona {nombre: 'Juan', apellido: 'Miranda', email: 'juan@gmail.com'}

let madre = new Persona('Magaly', 'Villablanca', 'laly@gmail.com');
console.log(madre);
//Persona {nombre: 'Magaly', apellido: 'Villablanca', email: 'laly@gmail.com'}

padre.email = 'jmirandav@mail.cl';
console.log(padre);

//UTILIZANDO METODO NOMBRE COMPLETO:
console.log(padre.nombreCompleto()); //Juan Miranda
console.log(madre.nombreCompleto()); //Magaly Villablanca
