/*Objet Date*/
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/reference/global_objects/date
//const quatroHoras = 60 * 60 * 4 * 1000;//4 mil segundos, 60seg * 60seg * 4h * 1000milhesimos de seg
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + quatroHoras + umDia);
//console.log(data.toString());//exibi a data de em ingles

//m^s em js: começa no 0=janeiro e 11=dezembro (a,m,d,h,M,s,ms)
//const data = new Date(2019, 3, 20, 15, 14, 59, 999);//ano, mes 3(abril), dia, hora, minuto, segundo, milhesimo(999max) de seg
const data = new Date ('2019-04-20 20:15:59');//T=tempo ou hora / usa o espaço
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);//Começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());// 0= Domingo a 6=Sábado
console.log(data.toString());

//18min