// MÉTODOS GET Y SET EN JAVASCRIPT

let persona = {
    nombre: 'Maria',
    apellido: 'Miranda',
    email: 'mara@maralena.cl',
    edad: 33,
    idioma: 'es',

    //Estructura metodo get:
    get lang() {
        return this.idioma.toUpperCase();
    },

    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    },

    set lang(nuevoIdioma) {
        this.idioma = nuevoIdioma.toUpperCase();
    }
}

//Imprimimos el valor que da el metodo Get
console.log(persona.nombreCompleto); //María Miranda
console.log(persona.lang);

//Imprimimos el valor que da el metodo Set
persona.lang = 'en';
console.log(persona.lang); //
