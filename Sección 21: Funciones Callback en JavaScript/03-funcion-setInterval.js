//FUNCION SET INTERVAL:
//Ejecuta la función repetidamente cada cierto intervalo de tiempo

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

//Se ejecuta cada segundo
setInterval(reloj, 1000); //para mandarla a llamar cada un segundo