//DEFINIENDO INTERFACES EN TYPESCRIPT:

interface Usuario {
  nombreUsuario:string;
  password:string;
  confirmarPassword?:string; //se usa el ? -> para atributos que son opcionales
}

//creamos un usuario, respetando los atributos que esta tiene
let usuario1:Usuario = {nombreUsuario: 'Juan', password: '1234', confirmarPassword: '1234'};
let usuario2:Usuario = {nombreUsuario: 'Mara', password: '54321'};

console.log(usuario1); //{ nombreUsuario: 'Juan', password: '1234', confirmarPassword: '1234' }
console.log(usuario2); //{ nombreUsuario: 'Mara', password: '54321' }

console.log(usuario2.nombreUsuario); //Mara

//----------------------------------------------------------------------------------------------
//Interface con metodos
interface Abordar {
  abordarTransporte():void;
}

let avion:Abordar = {
  abordarTransporte: function () {
    console.log('Abordando avion...')
  }
}

avion.abordarTransporte(); //Abordando avion...