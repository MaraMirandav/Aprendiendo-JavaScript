//Forms -> seleccciona los elementos del formulario completo y los toma como un array
let formulario = document.forms['Formulario']
let botones = document.getElementsByTagName('button');


botones[0].addEventListener('click', () => {
    let nombreCompleto = document.getElementById('mostrar');
    let nombre = formulario['nombre'].value;
    let apellido = formulario['apellido'].value;

    nombreCompleto.innerText = `${nombre} ${apellido}`
});
