//ACCEDER A PROPIEDADES DE LOS OBJETOS
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

//Formas de acceder las propiedades del objeto
onsole.log(persona.nombre);
console.log(persona['apellido']);

//Acceder con ciclo for a las propiedades: for in
for(nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    // nombre, apellido, edad, nombreCompleto
    console.log(persona[nombrePropiedad]);
    //Maria, Miranda, mara@maralena.cl, 33, [Function: nombreCompleto]
}