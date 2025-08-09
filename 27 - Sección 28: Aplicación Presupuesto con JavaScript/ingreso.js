import { Presupuesto } from "./presupuesto.js";

export class Ingreso extends Presupuesto {
  //atributos estáticos
  static contadorIngresos = 0;

  //Constructor:
  constructor(descripcion,valor) {
    super(descripcion, valor);
    this._id = ++Ingreso.contadorIngresos;
  }

  //GETTER
  get id() {
    return this._id;
  }
}