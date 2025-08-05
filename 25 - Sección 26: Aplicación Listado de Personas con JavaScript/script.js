import { Persona } from "./persona.js";

//Elementos del DOM globales:
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let listado = document.getElementById('listado');
let boton = document.getElementById('boton-agregar');
let resultadoOperacion = document.getElementById('resultado');

// Array con personas de ejemplo:
const arrayPersonas = [
    new Persona('James', 'Ovalle'),
    new Persona('María', 'Miranda'),
]

//Función para mostrar el listado:
function imprimirPersonas(arrayPersonas) {
    listado.innerHTML = '';
    for(let persona of arrayPersonas) {
        let elemento = document.createElement('li');
        elemento.className = 'list-group-item';
        elemento.innerText = `${persona.nombre} ${persona.apellido}`;
        listado.appendChild(elemento);
    }
}

//Función para verificar si la persona existe en el listado:
function personaExiste() {
    let existe = false;
    for(let persona of arrayPersonas) {
        if(persona.nombre === nombre.value && persona.apellido === apellido.value) {
            existe = true;
            break;
        }
    }
    return existe;
}

//Función para agregar una nueva persona
function agregarPersona() {
    let mensaje = document.createElement('p');
    if(nombre.value != '' && apellido.value != '') {
        if(!personaExiste()) {
            let personaNueva = new Persona(nombre.value, apellido.value);
            arrayPersonas.push(personaNueva);
            imprimirPersonas(arrayPersonas);
            mensaje.innerText = 'Se ha agregado la persona al listado satisfactoriamente ✅';
            mensaje.className = 'text-success-emphasis';
            resultadoOperacion.appendChild(mensaje);
        }else {
            mensaje.innerText = 'Esta persona ya existe en el listado ⚠️';
            mensaje.className = 'text-warning-emphasis';
            resultadoOperacion.appendChild(mensaje);
        }
    }else {
        mensaje.innerText = 'No has agregado la información necesaria al listado ⚠️';
        mensaje.className = 'text-warning-emphasis';
        resultadoOperacion.appendChild(mensaje);
    }
}

//Evento click: Agrega una nueva persona al array y actualiza el listado
boton.addEventListener('click',() => {
    resultadoOperacion.innerHTML = '';
    agregarPersona();
    imprimirPersonas(arrayPersonas);
})

//Al cargar la página, muestra las personas de ejemplo:
window.onload = function () {
    imprimirPersonas(arrayPersonas);
}