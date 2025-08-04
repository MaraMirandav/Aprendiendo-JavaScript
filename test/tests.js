const tarjeta = document.getElementById('tarjeta');
const ayuda = document.getElementById('ayuda');
const error = document.getElementById('error');

// Mostrar ayuda al enfocarse
tarjeta.addEventListener('focus', () => {
  ayuda.style.display = 'block';
  error.style.display = 'none';
});

// Validar al perder el foco
tarjeta.addEventListener('blur', () => {
  ayuda.style.display = 'none';
  const valor = tarjeta.value.replace(/\D/g, ''); // Elimina cualquier caracter no numérico

  if (valor.length !== 16) {
    error.style.display = 'block';
  } else {
    error.style.display = 'none';
  }
});
