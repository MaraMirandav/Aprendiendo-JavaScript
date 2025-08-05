//PROMESAS:
//Es un objeto que representa el resultado eventual de una operación asincrónica.
//Es codigo que tiene varios estados y puede seguir dos caminos:
    // -> Resolved(valor): Cuando la operación fue exitosa (usamos '.then()')
    // -> Rejected(error): Si algo falló (usamos '.catch()')
    // -> Pending: La promesa está en proceso, aún no se resolvió ni falló

//Sintaxis:
// - Se dará como parámetros funciones de tipo callback
// - Primer parámetro (función) -> en caso de ser resuelta (resolved)
// - Segundo parámetro (función) -> en caso de fallo (rejected)

let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true; //Si es true (resolved)
    if(expresion) {
        resolved('Resolvió correcto');
    }else {
        rejected('Se produjo un error');
    }
});

//Si la expresión es verdadera, se ejecuta la función resolved y su contenido se pasa como argumento ('valor'),que se imprime en consola como 'Se resolvió correctamente'
//Si la expresión es falsa, ocurre lo mismo, pero usando función rejected.
miPromesa.then(valor => console.log(valor),error => console.log(error));

//Usando .catch() -> De mejor sintaxis:
miPromesa
    .then(valor => console.log(valor))
    .catch(error => console.log(error));