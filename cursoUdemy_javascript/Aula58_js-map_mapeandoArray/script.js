/**
 * Map - Mapenado a Array (Altera os dados originais, mas mantem o tamanho)
 */

//Dobra osvalores
// indice        0  1   2   3  4  5  6  7  8  9  10  11  12  13
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

//Exemplo 1
/*
const numeroEmDobro = numeros.map(function(valor) {
    return valor * 2;
});
*/

//exemplo 2 = (Arrow Function '=>')
const numeroEmDobro = numeros.map(valor => valor * 2);

console.log('<----Array alterado---->');
console.log(numeroEmDobro);


//Objetos
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

console.log('');
console.log('<----Array-retornando-nomes---->');

const nomes = pessoas.map(obj => obj.nome);
const nomes_2 = pessoas.map(obj => ({nome: obj.nome}));
//exemplo 1
console.log(nomes);
//exemplo 2
console.log(nomes_2);

console.log('');
console.log('<----Array-retornando-idades---->');
//exemplo 1
const idades = pessoas.map(obj => ({idade: obj.idade}));
//exemplo 2
const idades_2 = pessoas.map(obj => obj.idade);
console.log(idades_2);
console.log(idades);

console.log('');
console.log('<----Array-retornando-id---->');

const comId = pessoas.map(function(obj, indice) {
    obj.id = indice + 1;//somando + 1, para ñ ter id '0'
    return obj;
});
console.log(comId);

console.log('');
console.log('<----Array-retornando-id-original---->');

const comIdOriginal = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});
console.log(comIdOriginal);
//13min