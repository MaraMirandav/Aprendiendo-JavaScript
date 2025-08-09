import { Presupuesto } from "./presupuesto.js";
import { Ingreso } from "./ingreso.js";
import { Egreso } from "./egreso.js";
//-------------------------------------------------------------------------------------------
//Elementos del DOM:
const CONTENEDOR_MENSAJE = document.getElementById('contenedor-mensaje');
const TBODY_INGRESO = document.getElementById('tbody-ingreso');
const TBODY_EGRESO = document.getElementById('tbody-egreso');
const BOTON_AGREGAR = document.getElementById('boton-agregar');
const TOTAL_INGRESOS = document.getElementById('total-ingreso');
const TOTAL_EGRESOS = document.getElementById('total-egreso');
const TOTAL_PRESUPUESTO = document.getElementById('total-presupuesto');


//-------------------------------------------------------------------------------------------
//Array con los ingresos (instancias)
const INGRESOS = [];

//Array con los Egresos (instancias)
const EGRESOS = [];

//-------------------------------------------------------------------------------------------
//Funcion para agregar elementos al presupuesto:
function agregarArrayPresupuesto() {
  const SELECTOR = document.getElementById('movimientos');
  let descripcion = document.getElementById('descripcion');
  let valor = document.getElementById('valor');
  let mensaje = document.createElement('p');

  if(isNaN(parseFloat(valor.value)) && descripcion.value === '') {
    mensaje.innerText = 'No has ingresado la descripción, ni el valor en el presupuesto ⚠️'
    mensaje.className = 'text-warning-emphasis';
    CONTENEDOR_MENSAJE.appendChild(mensaje);
  }else if(isNaN(parseFloat(valor.value))) {
    mensaje.innerText = 'No has ingresado el valor en el presupuesto ⚠️'
    mensaje.className = 'text-warning-emphasis';
    CONTENEDOR_MENSAJE.appendChild(mensaje);
  }else if(descripcion.value === '') {
    mensaje.innerText = 'No has ingresado la descripción en el presupuesto ⚠️'
    mensaje.className = 'text-warning-emphasis';
    CONTENEDOR_MENSAJE.appendChild(mensaje);
  }else{
    if(SELECTOR.value === 'ingreso') {
      let ingreso = new Ingreso(descripcion.value, parseFloat(valor.value));
      INGRESOS.push(ingreso);
      mensaje.innerText = 'Ingreso completado satisfactoriamente ✅'
      mensaje.className = 'text-success-emphasis';
      CONTENEDOR_MENSAJE.appendChild(mensaje);
    }else if(SELECTOR.value === 'egreso') {
      let egreso = new Egreso(descripcion.value, parseFloat(valor.value));
      EGRESOS.push(egreso);
      mensaje.innerText = 'Egreso completado satisfactoriamente ✅'
      mensaje.className = 'text-success-emphasis';
      CONTENEDOR_MENSAJE.appendChild(mensaje);
    }
  }
}

//-------------------------------------------------------------------------------------------
// Funcion que agrega ingresos o egresos a la tabla
function agregarPresupuestoTabla(elemento, bool, contador,tbodyDestino) {
  const ESTANDAR = bool ? 'ingreso': 'egreso'; //Si es true, corresponde a ingreso, si es false, egreso

  const FILA = document.createElement('tr');
  let idPresupuesto = document.createElement('th');
  let descripcion = document.createElement('td');
  let valor = document.createElement('td');
  let contenedorBoton = document.createElement('td');
  let botonEliminar = document.createElement('button');

  idPresupuesto.innerText = elemento.id;
  FILA.className = `fila-${ESTANDAR}`;
  FILA.id = `${ESTANDAR}-${elemento.id}`;
  idPresupuesto.scope = 'row';
  descripcion.innerText = elemento.descripcion;
  valor.innerText = `${elemento.valor.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR'}
  )}`;

  contenedorBoton.style.width = '1px';
  botonEliminar.className = 'btn btn-outline-primary';
  botonEliminar.style.fontSize = '0.6rem';
  botonEliminar.innerText = 'X';
  botonEliminar.id = `eliminar-${ESTANDAR}-${elemento.id}-${contador}`;
  contenedorBoton.appendChild(botonEliminar);

  //Evento click: Para eliminar filas de ingreso o egreso
  botonEliminar.addEventListener('click', () => {
    if(ESTANDAR === 'ingreso') {
      INGRESOS.splice(contador, 1);
      imprimirPresupuestos();
    }else {
      EGRESOS.splice(contador, 1);
      imprimirPresupuestos();
    }
    totalPresupuestoDisponible();
  })

  FILA.appendChild(idPresupuesto);
  FILA.appendChild(descripcion);
  FILA.appendChild(valor);
  FILA.appendChild(contenedorBoton);

  tbodyDestino.appendChild(FILA);
}

//-------------------------------------------------------------------------------------------
//Función para imprimir los elementos del presupuesto por pantalla:
function imprimirPresupuestos() {
  TBODY_INGRESO.innerHTML = '';
  TBODY_EGRESO.innerHTML = '';

  //Ingresos
  let contadorIngreso = 0;
  for(let ingreso of INGRESOS) {
    agregarPresupuestoTabla(ingreso, true,contadorIngreso,TBODY_INGRESO);
    contadorIngreso++;
  }

  //Egresos
  let contadorEgreso = 0;
  for(let egreso of EGRESOS) {
    agregarPresupuestoTabla(egreso,false,contadorEgreso,TBODY_EGRESO);
    contadorEgreso++;
  }
}

//-------------------------------------------------------------------------------------------
//Función para obtener el total de ingresos o egresos
function totalIngresosEgresos(array, totalDOM) {
  let total = 0;
  if (!Array.isArray(array)) {
    return;
  }else {
    for(let elemento of array) {
      total += elemento.valor;
    }

    totalDOM.innerText = `${total.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR'
    })}`;
    return total;
  }
}

//-------------------------------------------------------------------------------------------
//Función para obtener el total del presupuesto disponible
function totalPresupuestoDisponible() {
  let totalIngresos = totalIngresosEgresos(INGRESOS,TOTAL_INGRESOS);
  let totalEgresos = totalIngresosEgresos(EGRESOS,TOTAL_EGRESOS);
  let totalFinal = totalIngresos - totalEgresos;

  TOTAL_PRESUPUESTO.innerText = `${totalFinal.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR'
    })}`;
}


//-------------------------------------------------------------------------------------------
//Evento click: Agrega los presupuestos, los imprime y actualiza el listado
BOTON_AGREGAR.addEventListener('click', () => {
  CONTENEDOR_MENSAJE.innerHTML = '';
  agregarArrayPresupuesto();
  totalIngresosEgresos(INGRESOS,TOTAL_INGRESOS);
  totalIngresosEgresos(EGRESOS,TOTAL_EGRESOS);
  totalPresupuestoDisponible();
  imprimirPresupuestos();
})

window.onload = function () {
  imprimirPresupuestos();
  totalIngresosEgresos();
  totalPresupuestoDisponible();
}

