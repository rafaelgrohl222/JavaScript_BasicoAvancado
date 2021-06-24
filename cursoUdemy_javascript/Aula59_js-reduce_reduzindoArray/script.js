/**
 * Reduce - Reduzindo o Array
 */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
/*
const total = numeros.reduce(function(acumulador, valor, indice, Array) {
    //if(valor % 2 === 0) acumulador.push(valor);//multiplo por 2
    acumulador += valor;//exemplo 1
    //acumulador = acumulador + valor;// exemplo 2
    return acumulador;
}, 0);
console.log(total);
*/
/*
console.log('');//espaço
console.log('<----Multiplos-por-2---->');
//multiplos por 2
const total = numeros.reduce(function(acumulador, valor, indice, Array) {
    //valor %= resto da divisão === igual a 0
    if(valor % 2 === 0) acumulador.push(valor);//multiplo por 2
    return acumulador;
}, []);
console.log(total);
*/
console.log('');//espaço

console.log('Reduce - Receber mais idade')
//Objetos
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
//Recebe o objeto com a idade maior
const maisIdosa = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisIdosa);