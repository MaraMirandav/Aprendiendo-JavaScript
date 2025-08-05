//REDONDEO Y TRUNCADO:
let numero = 8.5, redondeo, truncado;

//1) Redondeo:
//Math.round() -> redondea al valor entero más cercano.
//.5 o superior, redondea al valor entero superior más cercano.

redondeo = Math.round(numero);
console.log(redondeo); // 9

//2) Truncado:
//Math.trunc() -> elimina la parte flotante (decimal)
truncado = Math.trunc(numero);
console.log(truncado); // 8