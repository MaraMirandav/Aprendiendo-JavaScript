import { Personas } from "./05-persona";

let personas1 = new Personas('Mara', 'Miranda');

console.log(personas1); //Personas { nombre: 'Mara', apellido: 'Miranda' }
console.log(personas1.nombre); //Mara
console.log(personas1.apellido); //Miranda


// -----------------------------------------------------------------------------
//  CONFIGURAR PROYECTO CON TYPESCRIPT Y TS-NODE
// -----------------------------------------------------------------------------
// npm init -y
// - Crea package.json con configuración básica.

// npm install -D ts-node
// - Instala TypeScript y ts-node para ejecutar archivos .ts directamente.

// npx tsc --init
// - Crea tsconfig.json con configuración del compilador.

// -----------------------------------------------------------------------------
// ARCHIVOS DEL PROYECTO
// -----------------------------------------------------------------------------
// 05-persona.ts → Define y exporta la clase Personas.
// 05-modulos.ts → Importa la clase y la ejecuta.

// -----------------------------------------------------------------------------
//  EJECUTAR EL CÓDIGO
// -----------------------------------------------------------------------------
// npx ts-node 05-modulos.ts
// - Resultado esperado: Mara