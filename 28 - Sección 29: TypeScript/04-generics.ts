//GENERICS:
//Este array solo aceptará numeros: Especifica el tipo de datos que almacenará, en este caso, number
// Si agrego un string, no lo aceptará, ya que no almacena tipo string.
let arregloNumeros: Array<number>;

arregloNumeros = [1,2,3,4];
console.log(arregloNumeros); //[ 1, 2, 3, 4 ]
console.log(arregloNumeros[0]); //1