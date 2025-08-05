// AGREGAR Y ELIMINAR PROPIEDADES OBJETOS
let persona = {
    nombre: 'Maria',
    apellido: 'Miranda',
    email: 'mara@maralena.cl',
    edad: 33,
    //AGREGAR MÉTODOS A OBJETOS:
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}

//Agregar propiedades
persona.tel = '12345678';
persona.tel = '87654321'; //lo reemplaza
console.log(persona);

//Eliminar propiedades
delete persona.email;
console.log(persona);

