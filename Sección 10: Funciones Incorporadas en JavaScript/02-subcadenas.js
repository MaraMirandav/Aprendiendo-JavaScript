//SUBCADENAS:
let cadena3 = 'Hola Mundo';

//Substring(indice_inicio, indice_fin -1) -> no se incluye caracter indice_fin
let cadena1 = cadena3.substring(0,4);
console.log(cadena1); //Imprime 'Hola'

//Subcadena "Mundo"
let cadena2 = cadena3.substring(5); //Solo caracter de inicio (asume que es hasta el final de la cadena)
console.log(cadena2); //Imprime 'Mundo'

