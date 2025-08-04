//PALABRA ASYNC CON PROMESAS:
//Poner la palabra async antes de la definicion de un metodo, quiere decir que está obligado a entregar una promesa
//Permite declarar funciones asincrónicas que devuelven una promesa automáticamente

//async -> indica que una función regresa una promesa
async function miFuncionConPromesa() {
    return 'saludos con promesa y async';
}
//la función miFuncionConPromesa debe ir con paréntesis
miFuncionConPromesa().then(valor => console.log(valor)) //saludos con promesa y async

//---------------------------------------------------------------------------------
//PALABRA AWAIT Y ASYNC CON PROMESAS:
//Await -> Espera el resultado de la promesa, va a procesar la promesa.
// Se utiliza dentro de funciones async para pausar su ejecución hasta que una promesa se resuelva

//async / await:
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolved => {
        resolved('Promesa con await');
    });

    console.log(await miPromesa); //Aqui usamos await en vez de then, lo usamos dentro de una función declarada con async, s
}

funcionConPromesaYAwait();//Promesa con await