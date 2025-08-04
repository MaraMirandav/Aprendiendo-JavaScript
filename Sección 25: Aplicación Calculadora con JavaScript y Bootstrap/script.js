//Variables globales:
let op1 = document.getElementById('op1');
let op2 = document.getElementById('op2');
let resultado = document.getElementById('resultado');
let botones = document.getElementsByTagName('button');

//Función Sumar
function sumar () {
    let res = parseFloat(op1.value) + parseFloat(op2.value);
    resultado.innerHTML = `Resultado : ${res}`;
}

//Función Restar
function restar () {
    let res = parseFloat(op1.value) - parseFloat(op2.value);
    resultado.innerHTML = `Resultado : ${res}`;
}

//Función Multiplicar (usando función almacenada en una variable)
let multiplicar = function () {
    let res = parseFloat(op1.value) * parseFloat(op2.value);
    resultado.innerHTML = `Resultado : ${res}`;
}

//Función Dividir (Usando función flecha)
let dividir = () => {
    let res;
    if(parseFloat(op2.value) == 0) {
        res = `No se puede realizar la operación`;
        resultado.innerHTML = `Resultado: ${res}`;
    }else {
        res = parseFloat(op1.value) / parseFloat(op2.value);
        resultado.innerHTML = `Resultado : ${res}`;
    }
}

//Eventos:
botones[0].addEventListener('click', sumar);
botones[1].addEventListener('click', restar);
botones[2].addEventListener('click',multiplicar);
botones[3].addEventListener('click', dividir);

