//SINTAXIS Y MÁS FUNCIONES FLECHAS:

//1) Si solo imprimimos un valor, no es necesario abrir el cuerpo, solo colocar el mensaje luego de la flecha:
const miFuncionFlecha2 = () => console.log('Saludos desde mi función flecha 2, sin abrir el cuerpo');
miFuncionFlecha2(); //Saludos desde mi función flecha 2, sin abrir el cuerpo

//------------------------------------------------------------------------
//2) Para devolver una cadena:
const saludar = () => {
    return 'Saludos desde funcion saludar, nueva función flecha';
}
console.log(saludar()); //Saludos desde funcion saludar, nueva función flecha

//------------------------------------------------------------------------
//3) Función saludar (anterior) simplificada:
const saludar2 = () => 'Saludos desde funcion saludar2, función flecha saludar simplificada';
console.log(saludar2()); //'Saludos desde funcion saludar2, función flecha saludar simplificada'

//------------------------------------------------------------------------
//4) Para devolver un objeto: Se cambia las llaves por paréntesis en la función y se usan las llaves para definir el objeto:
const regresarObjeto = () => ({nombre: 'María', apellido: 'Miranda', edad: 33});
console.log(regresarObjeto()); //{ nombre: 'María', apellido: 'Miranda', edad: 33 }

//------------------------------------------------------------------------
//5) Para recibir parámetros:
//Forma clasica de esta funcion:
const funcionConParametrosClasico = function(mensaje) {
    console.log(mensaje);
}
funcionConParametrosClasico('Saludos desde función flecha clásica con parámetros'); //Saludos desde función flecha clásica con parámetros

//Forma simplificada:
const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('Saludos desde función flecha simplificada con parámetros'); //Saludos desde función flecha simplificada con parámetros

//Si es solo un parámetro, podemos omitir los paréntesis:
const funcionConUnParametro = mensaje => console.log(mensaje);
funcionConParametros('Saludos desde función flecha simplificada con un solo parámetro'); //Saludos desde función flecha simplificada con un solo parámetro

//Función con varios parámetros:
const funcionConVariosParametros = (op1, op2) => `Resultado de la operación realizada en la función flecha con varios parámetros: ${op1 + op2}`;
console.log(funcionConVariosParametros(3,5)); //Resultado de la operación realizada en la función flecha con varios parámetros: 8

//Si fueran operaciones más complejas:
const funcionConVariosParametros2 = (op1, op2) => {
    let resultado = op1 + op2 //acá colocamos todas las operaciones
    return `Resultado de la operación realizada en la función flecha con varios parámetros: ${resultado}`;
};
console.log(funcionConVariosParametros2(3,5)); //Resultado de la operación realizada en la función flecha con varios parámetros: 8