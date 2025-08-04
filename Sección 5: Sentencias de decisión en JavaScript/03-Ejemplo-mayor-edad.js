//EJEMPLO MAYOR DE EDAD:

const EDAD_ADULTO = 18;
let edadPersona = 7;

if(edadPersona >= EDAD_ADULTO) {
    console.log(`La persona con edad ${edadPersona} es un adulto`);
}else {
    console.log(`La persona con edad ${edadPersona} es menor de edad`);
}

//Con operador ternario:
let esMayorDeEdad = (edadPersona >= EDAD_ADULTO) ? "Es mayor de edad" : "Es menor de edad";
console.log(esMayorDeEdad);