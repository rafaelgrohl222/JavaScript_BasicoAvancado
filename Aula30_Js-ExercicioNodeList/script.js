const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

//Pegar o fundo do bory
//Pegar os stilos computados que o navegador computou do CSS do bory
//função getComputedStyle(pegar)
const estilosBory = getComputedStyle(document.body);
const backgroundColorBory = estilosBory.backgroundColor;
console.log(backgroundColorBory);

for(let p of ps){
    //pegando a cor do bory e colocando no <p>
    p.style.backgroundColor = backgroundColorBory;
    //colocando a cor branca no <p>
    p.style.color = '#FFFFFF';
}