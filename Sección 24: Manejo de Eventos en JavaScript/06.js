//ONFOCUS: Cuando el elemento recibe el foco (ej. al hacer clic o tabular hacia él). Se usa para mostrar ayuda, cambiar estilo, iniciar validación

let inputNombre = document.getElementById('nombre');
let inputApellido = document.getElementById('apellido');

// Cuando se enfoca el input, se cambia su fondo a color amarillo
inputNombre.addEventListener('focus', () => {
inputNombre.style.background = 'yellow';
});

inputApellido.addEventListener('focus', () => {
inputApellido.style.background = 'yellow';
});


//ONBLUR: Cuando el elemento pierde el foco. Se usa para validar datos, ocultar ayuda, restaurar estilo

inputNombre.addEventListener('blur', () => {
inputNombre.style.background = 'grey';
});

inputApellido.addEventListener('blur', () => {
inputApellido.style.background = 'grey';
});