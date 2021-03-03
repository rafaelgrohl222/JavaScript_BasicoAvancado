/** [Aula] setInterval e setTimeOut
 * [setInterval] - executa, o intervalo de tantos em tantos seg ou min
 * [setTimeOut] - executa só uma vez
 */
//função mostra horas local
function mostraHora () {
    let data = new Date();
    //hora local do computador
    return data.toLocaleTimeString('pt-BR', {
        hour12: false //24h
    });
}

//executa até solicitado
let timer = setInterval (function () {
    console.log(mostraHora());
}, 1000);

//executa 1 vez
setTimeout (function () {
    clearInterval(timer);
    console.log('[PAREI]');
}, 5000);

//executa 1 vez
setTimeout (function () {
    console.log('É voltei, rsrsrsr')
}, 5000);
//07min