import { Persona } from './ejemplo01.js';

export class Mujer extends Persona {
    constructor(nombre, apellido, isPeluda) {
        super(nombre, apellido);
        this._isPeluda = isPeluda;
    }
    toString() {
        let zorra = this._isPeluda ? 'Tengo la zorra peluda': 'Tengo la zorra pelada';
        return `${this._nombre} ${this._apellido}. ${zorra}`
    }
}