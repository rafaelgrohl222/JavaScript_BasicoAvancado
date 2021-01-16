function getDiaSemanaTexto (diaSemana){
    let diaSemanaTexto;

    switch (diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Data "INCORRETA"';
            return diaSemanaTexto;
    }
}
const data = new Date('1987-04-26 00:00:00');
let dataSemana = data.getDay();
const dataSemanaTexto = getDiaSemanaTexto(dataSemana);

//if(dataSemana === 0){
//    dataSemanaTexto = 'Domingo';
//} else if(dataSemana === 1){
//    dataSemanaTexto = 'Segunda';
//} else if(dataSemana === 2){
//    dataSemanaTexto = 'Terça';
//} else if(dataSemana === 3){
//    dataSemanaTexto = 'Quarta';
//} else if(dataSemana === 4){
//    dataSemanaTexto = 'Quinta';
//} else if(dataSemana === 5){
//    dataSemanaTexto = 'Sexta';
//} else if(dataSemana === 6){
//    dataSemanaTexto = 'Sábado';
//} else {
//    dataSemanaTexto = 'Data "INVALIDA"';
//}

//switch (dataSemana){
//    case 0:
//        dataSemanaTexto = 'Domingo';
//        break;
//    case 1:
//        dataSemanaTexto = 'Segunda';
//        break;
//    case 2:
//        dataSemanaTexto = 'Terça';
//        break;
//    case 3:
//        dataSemanaTexto = 'Quarta';
//        break;
//    case 4:
//        dataSemanaTexto = 'Quinta';
//        break;
//    case 5:
//        dataSemanaTexto = 'Sexta';
//        break;
//    case 6:
//        dataSemanaTexto = 'Sábado';
//        break;
//    default:
 //       dataSemanaTexto = 'Data "INCORRETA"';
//        break;
//}

console.log(dataSemana, dataSemanaTexto);