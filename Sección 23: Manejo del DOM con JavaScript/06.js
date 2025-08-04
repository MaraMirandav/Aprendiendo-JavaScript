//USANDO DOCUMENT.WRITE:
let botoncito = document.getElementById('botoncito');
let botoncito2 = document.getElementById('botoncito2');
let botoncito3 = document.getElementById('botoncito3');

botoncito.addEventListener('click', () => {
    document.write('Adiós!'); //puede sobrescribir todo el contenido una vez que se haya cargado el documento HTML
});

botoncito2.addEventListener('click', () => {
    let titulo = document.getElementById('titulo');
    titulo.innerText = 'Probando como cambiar el titulo en JS';
});

botoncito3.addEventListener('click', () => {
    let nuevoTitulo = document.createElement('h2');
    let contenedor = document.getElementById('contenedor');
    nuevoTitulo.innerText = 'Nuevo titulo con JS';
    contenedor.appendChild(nuevoTitulo);
});