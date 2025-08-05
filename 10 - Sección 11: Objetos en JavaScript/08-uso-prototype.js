// USO PROTOTYPE:

function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email

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

//USANDO PROTOTYPE:
//Agregamos una propiedad con un valor por default
Persona.prototype.tel = '1234567';
console.log(`Telefono de padre usando prototype: ${padre.tel}`); //1234567
console.log(`Telefono de madre usando prototype: ${madre.tel}`); //1234567

//Si modifico el valor para el padre, cambiamos su valor específica para ese objeto
padre.tel = '7654321';
console.log(`Nuevo telefono de padre: ${padre.tel}`);
console.log(`Telefono de madre usando prototype: ${madre.tel}`);
