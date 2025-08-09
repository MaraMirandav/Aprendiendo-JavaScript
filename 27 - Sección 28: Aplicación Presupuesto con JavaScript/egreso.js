import { Presupuesto } from "./presupuesto.js";

export class Egreso extends Presupuesto {
  //atributos estáticos
  static contadorEgresos = 0;

  //Constructor:
  constructor(descripcion,valor) {
    super(descripcion, valor);
    this._id = ++Egreso.contadorEgresos;
  }

  //GETTER
  get id() {
    return this._id;
  }
}