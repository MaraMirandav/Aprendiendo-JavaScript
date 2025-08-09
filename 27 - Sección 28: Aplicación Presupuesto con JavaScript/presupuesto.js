export class Presupuesto {
  //Constructor
  constructor(descripcion, valor) {
    this._descripcion = descripcion;
    this._valor = valor;
  }

  //Getter y Setter
  get descripcion() {
    return this._descripcion;
  }

  set descripcion(nuevaDescripcion) {
    this._descripcion = nuevaDescripcion
  }

  get valor() {
    return this._valor;
  }

  set valor(nuevoValor) {
    this._valor = nuevoValor
  }
}