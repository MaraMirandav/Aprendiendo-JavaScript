//MANEJO DE EVENTOS:
let titulo = document.getElementById('titulo');

titulo.addEventListener('click', () => {
    titulo.innerText = 'Color del texto cambiado con JS'
    titulo.style.color = 'blue';
});