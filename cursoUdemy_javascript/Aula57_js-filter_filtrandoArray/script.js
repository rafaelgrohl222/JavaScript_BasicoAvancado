/**
 * Filter - Filtrando array (Não altera os dados)
 * Filter -> Sempre retornar um array, com a mesma quantidade de elemento
 * ou menos
 */

//Retorne um número maior que 10
// indice        0  1   2   3  4  5  6  7  8  9  10  11  12  13
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

//função anonima
//const numerosFiltrados = numeros.filter(valor => valor > 10);//exemplo 2
const numerosFiltrados = numeros.filter (function(valor, indice, array) {
    return valor > 10;//retorna a condição
});
console.log(numerosFiltrados);

console.log('<----Espaço-1--->');
console.log('');

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
//Filtra pessoas com + de 5 letras (arrow function) => 
const pessoasComNomeGrande = pessoas.filter (obj => obj.nome.length >= 5);
const pessoasComMaisDe50Anos = pessoas.filter (obj => obj.idade >= 50);
//ToLowerCase() converte letras em caixa baixa, endsWith('a') temina com ('a')
const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});

console.log(pessoasComMaisDe50Anos);//Filtra pessoas c/ + de 50 anos

console.log('<----Espaço-3--->');
console.log('');

console.log(pessoasComNomeGrande);//Filtra pessoas c/ + 5 letras

console.log('<----Espaço-4--->');
console.log('');

console.log(nomeTerminaComA);//Filtra pessoas que terminam com a Letra A
//25min