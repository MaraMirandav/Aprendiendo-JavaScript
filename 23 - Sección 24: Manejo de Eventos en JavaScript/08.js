//DELEGACIÓN EVENTOS:
//Asigna un único “listener” a un elemento padre, para manejar eventos que ocurren en sus elementos hijos.

// Obtenemos el elemento del DOM con id 'forms' (el formulario)
let formulario = document.getElementById('formulario');

// Cuando el formulario recibe el focus, cambiamos el fondo a rosado
formulario.addEventListener('focus', (evento) => {
    evento.target.style.background = 'pink'; // evento.target apunta al formulario
}, true); // 'true' como tercer parámetro = captura, permite que el formulario escuche el evento

// Cuando el formulario pierde focus, restauramos el fondo original
formulario.addEventListener('blur', (evento) => {
    evento.target.style.background = ''; // Se quita el estilo aplicado anteriormente
}, true); //'true' como tercer parámetro = captura, necesario para que funcione correctamente