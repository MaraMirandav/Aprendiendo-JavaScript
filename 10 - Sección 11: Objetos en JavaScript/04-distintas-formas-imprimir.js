// DISTINTAS FORMAS DE IMPRIMIR OBJETOS
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

//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ', ' + persona.apellido); //Maria, Miranda

//For in
for(nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
    // Maria Miranda mara@maralena.cl 33 [Function: nombreCompleto]
}

//Como array:
let personaArray = Object.values(persona);
console.log(personaArray);
//['Maria','Miranda','mara@maralena.cl', 33, [Function: nombreCompleto]]

//Como string: convierte en una cadena
let personaString = JSON.stringify(persona);
console.log(personaString);
//{"nombre":"Maria","apellido":"Miranda","email":"mara@maralena.cl","edad":33}