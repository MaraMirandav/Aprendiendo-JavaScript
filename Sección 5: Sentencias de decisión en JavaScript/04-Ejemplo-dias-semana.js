//EJEMPLO DIAS DE LA SEMANA:

//Usando if, else if, else:
let diaSemana = 1;

if(diaSemana == 1) {
    console.log('Lunes');
}else if(diaSemana == 2) {
    console.log('Martes');
}else if(diaSemana == 3) {
    console.log('Miércoles');
}else if(diaSemana == 4) {
    console.log('Jueves');
}else if(diaSemana == 5) {
    console.log('Viernes');
}else if(diaSemana == 6) {
    console.log('Sábado');
}else if(diaSemana == 7) {
    console.log('Domingo');
}else {
    console.log('Día de la semana erróneo');
}

//Usando switch:
switch(diaSemana){
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4:
        console.log('Viernes');
        break;
    case 5:
        console.log('Jueves');
        break;
    case 6:
        console.log('Sábado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Día de la semana erróneo');
        break;

    }