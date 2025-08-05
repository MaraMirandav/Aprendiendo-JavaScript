//INSTANCE OF (POO):

class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    //Método a sobreescribir
    obtenerDetalles() {
        return `Empleado:
        - Nombre: ${this.nombre}
        - Apellido: ${this.sueldo}`
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.detartamento = departamento;
    }

    //Metodo sobreescrito:
    obtenerDetalles() {
        return `Gerente:
        ${super.obtenerDetalles()}
        -Departamento: ${this.detartamento}`;
    }
}

//instance of:
//-------------------------------------------------------------
//Permite verificar si un objeto fue creado a partir de una clase o función constructora específica, por ejemplo, devuelve true si tipo fue creado con la clase Empleado
function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Empleado) {
        console.log("Es un objeto de tipo Empleado");
    } else {
        console.log("Es un objeto de tipo Gerente");
    }
}
//-------------------------------------------------------------

let empleado1 = new Empleado('Carlos',5000);
console.log(empleado1.obtenerDetalles());
//Empleado:
//    - Nombre: Carlos
//    - Apellido: 5000

let gerente1 = new Gerente('Carlos',5000,'Sistemas');
console.log(gerente1.obtenerDetalles());
//Gerente:
//Empleado:
//- Nombre: Carlos
//- Apellido: 5000
//-Departamento: Sistemas

//-------------------------------------------------------------
//Probando POLIMORFISMO:
imprimir(empleado1);
//Empleado:
//- Nombre: Carlos
//- Apellido: 5000

imprimir(gerente1);
//Gerente:
//Empleado:
//- Nombre: Carlos
//- Apellido: 5000
//-Departamento: Sistemas
//-------------------------------------------------------------