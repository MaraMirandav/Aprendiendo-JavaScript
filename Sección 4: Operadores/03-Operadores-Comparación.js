//OPERADORES DE COMPARACIÓN:
let a = 5;
let b = '5';

console.log(a); //Number
console.log(b); //String

//1) Operadores de igualdad (==)
// Compara valores y hace conversión si es necesario
console.log("a == b -> ", a == b); // True (transforma el string a numerico)

//2) Operador de igualdad estricta o exacto (===)
// Se compara el valor y el tipo de dato
console.log("a === b -> ", a === b); // False (el tipo de dato es distinto)

//String interpolation
console.log(`${a} === ${b} -> ${a === b}`); // 5 === 5 -> false
console.log(`${a} == ${b} -> ${a == b}`); // 5 == 5 -> true

//3) Operador distintos (!=):
//Compara valor y convierte el tipo de dato si es necesario
console.log(`${a} != ${b} -> ${a != b}`); // 5 != 5 -> false

//4) Operador distinto exacto (!==)
//Compara el valor y el tipo de dato
console.log(`${a} !== ${b} -> ${a !== b}`); // 5 !== 5 -> true

//5) Operador menor que:
console.log(`${a} < ${b} -> ${a < b}`); // 5 < 5 -> false

//6) Operador menor o igual que:
console.log(`${a} <= ${b} -> ${a <= b}`); // 5 <= 5 -> true

//7) Operador mayor que:
console.log(`${a} > ${b} -> ${a > b}`); // 5 > 5 -> false

//8) Operador mayor o igual que:
console.log(`${a} >= ${b} -> ${a >= b}`); // 5 >= 5 -> true