/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu no ano 1989
*/

//EXERCÍCIO
const nome = 'Luiz Otávio';
const sobrenome ='Miranda';
const idade = 30;
const peso = 84;
const alturaEmCm = 1.8;
let indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);
let anoNascimento = 2019 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg');
//TEMPLATE STRING
//USANDO: ACENTO CRAZEADO "`" ${LET OU CONST}
console.log(`tem  ${alturaEmCm} altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(nome + ' nasceu no ano ' + anoNascimento + '.');