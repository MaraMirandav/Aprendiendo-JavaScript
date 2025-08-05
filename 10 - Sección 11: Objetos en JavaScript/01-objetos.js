// 1) DEFINIR UN NUEVO OBJETO
// -> Forma más común de definir y crear objetos hasta el momento.
let persona = {
    nombre: 'Maria',
    apellido: 'Miranda',
    edad: 'mara@maralena.cl',
    edad: 33,
    //AGREGAR MÉTODOS A OBJETOS:
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}

//Probando imprimir atributos del objeto:
console.log(persona.nombre); //María
console.log(persona.edad); //33
console.log(persona.apellido); //Miranda
console.log(persona); //{ nombre: 'Maria', apellido: 'Miranda', edad: 33 }

//Probando imprimir MÉTODOS:
console.log(persona.nombreCompleto());

//-----------------------------------------------------------
//2) Definir un objeto:
// -> con palabra reservada new para crearlo en memoria
let persona2 = new Object(); //-> crea objeto vacío, en las siguientes lineas se le van definiendo los atributos de este.
persona2.nombre = 'James';
persona2.direccion = 'San Maximiliano 25';
persona2.edad = 30;

//Probando imprimir atributos del objeto
console.log(persona2.nombre);
console.log(persona2.edad);
