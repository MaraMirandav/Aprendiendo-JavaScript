//PROMESAS CON ASYNC, AWAIT Y SETTIMEOUT:

async function funcionConPromesaAwaitTimeout() {
    let miPromesa = new Promise(resolved => {
        console.log('Inicio de la función');
        setTimeout(() => resolved('Promesa con await y timeout'),3000);
    });
    console.log(await miPromesa); //como esperamos la respuesta de la función, se espera los segundos correspondientes antes de imprimir el console.log de fin de la función
    console.log('Fin de la función')//Se imprime una vez que se termine de procesar la promesa.
}

funcionConPromesaAwaitTimeout();//Promesa con await y timeout
//Resultado:
//Inicio de la función
//Promesa con await y timeout
//Fin de la función