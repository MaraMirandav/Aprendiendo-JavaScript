//USO DE setTimeout Y PROMESAS:

let miPromesa = new Promise((resolved) => {
    console.log('Inicio Promesa');
    setTimeout(() => resolved('Saludos con promesa y timeout'),3000); //proceso asíncrono
    console.log('Fin Promesa');
});

miPromesa.then(valor => console.log(valor));
//Resultado:
//Inicio Promesa
//Fin Promesa
//Saludos con promesa y timeout

