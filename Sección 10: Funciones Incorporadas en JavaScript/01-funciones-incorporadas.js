//FUNCIONES INCORPORADAS:

//Obtener el largo de una cadena
let cadena1 = 'Hola';
console.log(cadena1.length); //4

//No podemos modificar una cadena en JS
//Las cadenas son inmutables -> cadena[0] = 'X'; (no es posible)

//Podemos asignar una nueva cadena:
cadena1 = 'Adios';
console.log(cadena1);

//Recorrer cada caracter de la cadena:
for(let i = 0; i < cadena1.length; i++) {
    console.log(`${i} - ${cadena1[i]}`);
    //0 - A
    //1 - d
    //2 - i
    //3 - o
    //4 - s
}
