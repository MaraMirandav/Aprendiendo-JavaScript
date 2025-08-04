//OPERADORES ARITMÉTICOS:
let a, b, c, d, f, e;

//1) Suma
a = 3 + 4;
console.log(a);

//2) Resta
b = 6 - 2;
console.log(b);

//3) Multiplicación
c = a * 2;
console.log(c);

//4) División
d = b / 2.5;
console.log(d);

//5) Modulo (resto)
f = 9 % 2;
console.log(f);

//6) Potencia
e = 2 ** 3; //-> 2016
console.log(e);

e = Math.pow(2,3);
console.log(e);

//-------------------------------------------

//7) Pre-incremento: ++a
let variable;
variable = 0;
++variable;
console.log(variable); //1

//8) Post-incremento: a++
variable++;
console.log(variable); //2

//9) Pre-decremento: --a
--variable;
console.log(variable); //1

//10) Post-decremento: a--
variable--;
console.log(variable); //0

//-------------------------------------------
//Ejemplo:
a = 5;
b = 2;
c = ++a * b--; //4 * 2
console.log(c); //12
console.log(a); //6
console.log(b); //1 (decremento pendiente)