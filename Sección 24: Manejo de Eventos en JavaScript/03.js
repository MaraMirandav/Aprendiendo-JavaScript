//EVENTO ONCHANGE: Funciona cuando modificamos los valores de un campo de texto o los elementos de un formulario

let inputNombre = document.getElementById('nombre');

inputNombre.addEventListener('change', () => {
    inputNombre.value = inputNombre.value.toUpperCase();
});