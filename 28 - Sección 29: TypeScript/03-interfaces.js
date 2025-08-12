"use strict";
//DEFINIENDO INTERFACES EN TYPESCRIPT:
//creamos un usuario, respetando los atributos que esta tiene
let usuario1 = { nombreUsuario: 'Juan', password: '1234', confirmarPassword: '1234' };
let usuario2 = { nombreUsuario: 'Mara', password: '54321' };
console.log(usuario1); //{ nombreUsuario: 'Juan', password: '1234', confirmarPassword: '1234' }
console.log(usuario2); //{ nombreUsuario: 'Mara', password: '54321' }
console.log(usuario2.nombreUsuario); //Mara
let avion = {
    abordarTransporte: function () {
        console.log('Abordando avion...');
    }
};
avion.abordarTransporte(); //Abordando avion...
