//EVENTO ONMOUSSEOVER: Cuando el puntero del mouse entra en el elemento, por ejemplo, cambiar el color al pasar el mouse

let titulo = document.getElementById('titulo');

titulo.addEventListener('mouseover', () => {
    titulo.style.color = 'red';
});


//EVENTO ONMOUSSEOUT: Cuando el puntero del mouse sale del elemento, por ejemplo, volver al color original al quitar el mouse

titulo.addEventListener('mouseout', () => {
    titulo.style.color = 'blue';
});