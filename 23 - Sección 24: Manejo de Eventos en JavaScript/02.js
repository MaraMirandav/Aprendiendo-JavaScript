//EVENTO ONLOAD: Funciona cuando carga la pagina web

window.onload = function() {
    alert('Entrando a la página web...')
    let textoCookies = document.createElement('p');
    let contenedor = document.getElementById('mostrar');

    // navigator.cookieEnabled devuelve true si el navegador permite el uso de cookies, y false si están deshabilitadas.
    if(navigator.cookieEnabled) {
        textoCookies.innerText = 'Cookies están habilitadas...';
    }else{
        textoCookies.innerText = 'Cookies están inhabilitadas...';
    }
    contenedor.appendChild(textoCookies);

}