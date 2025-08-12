//DEFINIENDO CLASES EN TYPESCRIPT:

class Persona {
  //Atributos:
  private _nombre:string;

  //Constructor:
  constructor(nombre:string) {
    this._nombre = nombre;
  }

  //Setter y Getter
  public get nombre() : string {
    return this._nombre;
  }

  public set nombre(nuevoNombre : string) {
    this._nombre = nuevoNombre;
  }

  static metodoEstatico():number {
    return 10;
  }

}

let persona1 = new Persona('Juan');
console.log(persona1.nombre)
console.log(Persona.metodoEstatico());