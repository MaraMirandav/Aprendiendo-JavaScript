//Elementos del DOM globales:
const FECHA_COMPLETA = document.getElementById('fecha');
const HORA_COMPLETA = document.getElementById('hora');

//Función para obtener la hora actual, segun formato
function obtenerHora() {
  const FECHA_HOY = new Date();
	let formato = FECHA_HOY.toLocaleTimeString('es-ES', {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	})
  HORA_COMPLETA.innerHTML = formato;
}

//Función para obtener la fecha actual, segun formato
function obtenerFecha() {
  const FECHA_HOY = new Date();
  let fecha = FECHA_HOY.toLocaleDateString('es-ES',{
    weekday:'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric'});
  FECHA_COMPLETA.innerHTML = fecha;
}

obtenerFecha();
obtenerHora();

//Al cargar la página, muestra fecha y hora actual:
window.onload = function () {
    setInterval(obtenerHora, 1000);
    setInterval(obtenerFecha, 1000);
}
