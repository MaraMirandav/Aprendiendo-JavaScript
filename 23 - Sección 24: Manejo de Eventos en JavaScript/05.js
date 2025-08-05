//ONMOUSEDOWN: Al presionar el botón del mouse (antes de soltarlo)

let titulo = document.getElementById('titulo');

titulo.addEventListener('mousedown', () => {
    titulo.style.color = 'red';
});

//ONMOUSEUP: Al soltar el botón del mouse después de haberlo presionado

titulo.addEventListener('mouseup', () => {
    titulo.style.color = 'blue';
});

//ONMOUSEENTER: Cuando el puntero entra en el elemento, sin contar sus hijos, por ejemplo, cambiar fondo o mostrar un aviso
let subtitulo = document.getElementById('subtitulo');

subtitulo.addEventListener('mouseenter', () => {
    subtitulo.style.backgroundColor = 'lightgreen';
    subtitulo.style.color = 'red';
    subtitulo.textContent = 'Entrando con el mouse y usando mousecenter';
});

//ONMOUSELEAVE: Cuando el puntero sale del elemento, sin contar sus hijos, por ejemplo, ocultar efectos o devolver estilos

subtitulo.addEventListener('mouseleave', () => {
    subtitulo.style.backgroundColor = '';
    subtitulo.style.color = 'blue';
    subtitulo.textContent = 'Saliendo con el mouse y usando mouseleave';
});

//ONMOUSEMOVE: Mientras el puntero se mueve dentro del elemento, por ejemplo, mostrar posición del mouse o efectos dinámicos

let zona = document.getElementById('zona');

zona.addEventListener('mousemove', (e) => {
// e.offsetX / e.offsetY → posiciones relativas del cursor dentro del div
zona.textContent = `Coordenadas: X ${e.offsetX} | Y ${e.offsetY}`;
});

//ONCLICK: Cuando se presiona y se suelta el botón izquierdo del mouse, por ejemplo, activar un botón, abrir un enlace o enviar un formulario
let subtituloOnclick = document.getElementById('subtitulo-onclick');
subtituloOnclick.addEventListener('click', () => {
    subtituloOnclick.style.color = 'green';
});
