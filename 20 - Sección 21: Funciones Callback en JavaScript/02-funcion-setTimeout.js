//FUNCION SET TIME OUT:
//Ejecuta una función una sola vez después de cierto tiempo
// Podemos ejercutar varios procesos por separado, son asincronas

//Llamadas asíncronas con uso de setTimeout:
function miFuncionCallback() {
    console.log('Saludo asíncrono después de 3 segundos');
}

//setTimeout -> primer parámetro que recibe es una función callback, luego se indica el tiempo en milisegundos
setTimeout(miFuncionCallback,3000) //Después de 3 seg

//------------------------------------------------------------------------
//Podemos pasar directamente la función como parámetro:
setTimeout(function() {console.log('Saludo asíncrono, desde una función')}, 4000);

//Pasamos el parámetro, pero ahora con una función flecha:
setTimeout(() => console.log('Saludo asíncrono, desde una función flecha'),1000);

//Resultado:
// - Saludo asíncrono, desde una función flecha
// - Saludo asíncrono después de 3 segundos
// - Saludo asíncrono, desde una función