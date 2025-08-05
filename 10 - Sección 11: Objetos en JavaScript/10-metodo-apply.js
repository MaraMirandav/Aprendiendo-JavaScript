// USO METODO APPLY:
let persona1 = {
    nombre: 'Maria',
    apellido: 'Miranda',
    //Quitamos los parámetros usados en call para probar apply (funciona igual que call), luego los agregamos para probar las diferencias
    nombreCompleto: function(titulo, telefono) {
        //return this.nombre + ' ' + this.apellido
        return `${titulo} : ${this.nombre} ${this.apellido} - Teléfono: ${telefono}`;
    }
}

let persona2 = {
    nombre: 'James',
    apellido: 'Ovalle'
}

// Uso de apply: permite mandar a llamar un método en un objeto que no tiene definido cierto objeto
console.log(persona1.nombreCompleto()); //María Miranda

//Sintaxis:
console.log(persona1.nombreCompleto.apply(persona2)); //James Ovalle

//Hasta el momento funciona igual que call
//------------------------------------------------------------
//PASO DE ARGUMENTOS A APPLY:
console.log(persona1.nombreCompleto('Programadora', '7654321'));

//usamos un array para poder pasar los valores, se puede pasar directamente el array sin una variable, de ambas formas funciona bien
let arreglo = ['Programador', '1234567']
console.log(persona1.nombreCompleto.apply(persona2,arreglo)); //Programador : James Ovalle - Teléfono: 1234567

