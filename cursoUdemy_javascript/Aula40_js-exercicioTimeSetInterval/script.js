function criaHoraDosSegundos (segundos) {
    const data = new Date(segundos * 1000);//converção de seg p/ milesimodesegundos
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,//24h
        timeZone: 'UTC' //ou GMT, para zerar a data/horas
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;
function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

//Botão Iniciar
iniciar.addEventListener('click', function(event){
    
    clearInterval(timer);//zerar
    iniciaRelogio();
    relogio.classList.remove('pausado');
    //relogio.style.color = 'black';//relogio preto
});
//Botão Pausar
pausar.addEventListener('click', function(event){
    clearInterval(timer);//zerar
    relogio.classList.add('pausado');
    //relogio.style.color = 'red';//relogio vermelho
});
//Botão Zerar
zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    relogio.style.color = 'blue';//relogio azul
    segundos = 0;
});
//27min
