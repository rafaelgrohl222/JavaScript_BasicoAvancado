var agora = new Date;
var diaDaSemana = agora.getDay();
/**Dias da Semana
 * 0 = Domingo
 * 1 = Segunda - feira
 * 2 = Terca - feira
 * 3 = Quarta - feira
 * 4 = Quinta - feira
 * 5 = Sexta - feira
 * 6 = Sabado
 */
console.log(diaDaSemana);

switch (diaDaSemana) {
    case 0:
        console.log('Domingo!');
        break;
    case 1:
        console.log('Segunda - Feira');
        break;
    case 2:
        console.log('Terca - Feira');
        break;
    case 3:
        console.log('Quarta - Feira');
        break;
    case 4:
        console.log('Quinta - Feira');
        break;
    case 5:
        console.log('Sexta - Feira');
        break;
    case 6:
        console.log('Sabado');
        break;
    default:
        console.log('[ERROR] Dia invalido!');
}
