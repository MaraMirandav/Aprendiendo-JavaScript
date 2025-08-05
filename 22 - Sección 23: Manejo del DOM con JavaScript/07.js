//CAMBIANDO CONTENIDO DEL DOM:

let imagen = document.getElementById('imagenJS');

imagen.addEventListener('click', () => {
    imagen.src = 'https://www.fayerwayer.com/resizer/v2/YU4QBVUNGJEP7B7MAB3GR5GILQ.jpg?auth=84efbf412126a743e298f87f283e75c4d61a1b4afa1c279bc063738f9f6795a0&width=1200&height=675&smart=true';
});

//CAMBIANDO EL ESTILO CSS:
let botoncito = document.getElementById('botoncito');

botoncito.addEventListener('click', () => {
    let titulo = document.getElementById('titulo');
    titulo.style.color = 'blue';
});
