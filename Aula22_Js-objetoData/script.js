/*Objet Date*/
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/reference/global_objects/date
//const quatroHoras = 60 * 60 * 4 * 1000;//4 mil segundos, 60seg * 60seg * 4h * 1000milhesimos de seg
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + quatroHoras + umDia);
//console.log(data.toString());//exibi a data de em ingles

//m^s em js: começa no 0=janeiro e 11=dezembro (a,m,d,h,M,s,ms)
//const data = new Date(2019, 3, 20, 15, 14, 59, 999);//ano, mes 3(abril), dia, hora, minuto, segundo, milhesimo(999max) de seg
//const data = new Date ('2019-04-20 20:15:59');//T=tempo ou hora / usa o espaço
//console.log('Dia:', data.getDate());//Dia
//console.log('Mês:', data.getMonth() + 1);//Mês, Começa do zero
//console.log('Ano:', data.getFullYear());//Ano
//console.log('Hora:', data.getHours());//Hora
//console.log('Min:', data.getMinutes());//Minutos
//console.log('Seg:', data.getSeconds());//Segundos
//console.log('ms:', data.getMilliseconds());//Milesimo de segundos
//console.log('Dia semana:', data.getDay());//Dia da semana, 0= Domingo a 6=Sábado
//console.log('Milesimo de seg, hora zero:', Date.now());//Milésimo de segundos
//console.log(data.toString());//Marco zero até hoje

/*Função Zero a Esquerda*/
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

/*função formata data*/
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());//dia
    const mes = zeroAEsquerda(data.getMonth() + 1);//mês
    const ano = zeroAEsquerda(data.getFullYear());//mês
    const hora = zeroAEsquerda(data.getHours());//mês
    const min = zeroAEsquerda(data.getMinutes());//mês
    const seg = zeroAEsquerda(data.getSeconds());//mês

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
    //console.log(data);
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
//18min