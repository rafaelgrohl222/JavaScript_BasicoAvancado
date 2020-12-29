/*Projeto while, é quando sabe o quanto tem de valor
While = enquanto isso faças
do while = checar/faça enquanto 
*/

//---while classico---
/*
let i = 0;

while(i <= 10){
    console.log(i);//1,2,3,4,5,6,7,8,9,10s
    i++;
}
console.log('Segue a vida...');

//---while com length---

let i_2 = 0;
const nome = 'Rafael';

while(i_2 < nome.length){
    console.log(nome[i_2]);//acessando o indice. Rafael de cima p/ baixo
    i_2++;//atualizar a variável
}
console.log('Segue a vidas...2');
*/

//função gera numero aleatório
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);//floor: numero inteiro
}
//variaveis
const min = 1;
const max = 50;
let rand =10; //random(min, max);

//while = checa a condição e depois executo o código
//enquanto o (rand) for diferente que 10
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}
console.log('#########');
//do while = executa 1 vez o código e depois checa a condição
do {
    rand = random(min, max);
    console.log(rand); 
} while (rand !== 10)

//10min