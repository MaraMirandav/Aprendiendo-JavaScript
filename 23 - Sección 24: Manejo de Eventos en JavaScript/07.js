//Cuando el campo "Nombre" recibe el focus (es decir, haces clic en él), la función cambiar se activa.
let inputNombre = document.getElementById('nombre');
let inputApellido = document.getElementById('apellido');

//Cuando el input recibe el focus (cuando haces clic en él), ejecuta la función cambiar (de tipo callback)
inputNombre.addEventListener('focus', cambiar);
inputApellido.addEventListener('focus', cambiar);

//Sucede lo mismo al ejecutar la función regresar, cuando recibe blur
inputNombre.addEventListener('blur', regresar);
inputApellido.addEventListener('blur', regresar);

//Función cambiar
function cambiar(evento) {
    //evento.target apunta al input que provocó el evento, modificando así directamente sus estilos.
    let componente = evento.target;
    componente.style.background = 'yellow';
    componente.style.color = 'red';
}

//Función regresar
function regresar(evento) {
    let componente = evento.target;
    componente.style.background = 'grey';
    componente.style.color = 'blue';
}
