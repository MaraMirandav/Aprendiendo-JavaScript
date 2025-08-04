// USO CALL:
let persona1 = {
    nombre: 'Maria',
    apellido: 'Miranda',
    //Pasamos argumentos a la función para probar call
    nombreCompleto: function(titulo, telefono) {
        return `${titulo} : ${this.nombre} ${this.apellido} - Teléfono: ${telefono}`;
    }
}

let persona2 = {
    nombre: 'James',
    apellido: 'Ovalle'
}

// Uso de call para usar el metodo nombreCompleto, que pertenece a persona1 con los datos de persona2
//console.log(persona1.nombreCompleto()); //María Miranda

//Sintaxis:
//console.log(persona1.nombreCompleto.call(persona2)); //James Ovalle

//------------------------------------------------------------
//PASO DE ARGUMENTOS A CALL:
console.log(persona1.nombreCompleto('Programadora', '7654321'));
console.log(persona1.nombreCompleto.call(persona2,'Programador', '1234567')); //Programador : James Ovalle - Teléfono: 1234567


