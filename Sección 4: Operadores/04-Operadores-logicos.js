//OPERADORES LÓGICOS:

let a = true;
let b = false;

console.log(a); //true
console.log(b); //false

//1) Operador lógico && o AND:
// Verdadero si todos los valores son verdaderos
console.log(`${a} && ${b} -> ${a && b}`) //true && false -> false

//2) Operador lógico || u OR:
// Verdadero si cualquiera de los valores es verdadero
console.log(`${a} || ${b} -> ${a || b}`) //true || false -> true

//3) Operador ! o NOT:
// Invierte el valor original
console.log(`${a} -> ${!a}`) //true -> false