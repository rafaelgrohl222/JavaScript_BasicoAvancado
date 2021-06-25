/**
 * Filte + Map + Reduce
 * Retorne a soma de todos os pares
 * -> Filtrar pares
 * -> Dobrar os valores
 * -> Reduzir (Somar tudo)
 */

//array
// indice        0  1  2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Funcition
/*
// Filtrar pares = [ 50, 80, 2, 8, 22 ]
const numerosPares = numeros.filter(function(valor) {
    return valor % 2 === 0;
// Dobrar os valores = [ 100, 160, 4, 16, 44 ]
}).map(function(valor) {
    return  valor * 2;
// Reduzir (Somar tudo) = 324
}).reduce(function(ac, valor) {
    return ac + valor;
});
console.log(numerosPares);
*/

//Arrow function
const numerosPares = numeros

.filter(valor => valor % 2 === 0)// Filtrar pares = [ 50, 80, 2, 8, 22 ]
.map(valor => valor * 2)// Dobrar os valores = [ 100, 160, 4, 16, 44 ]
.reduce((ac, valor) => ac + valor);// Reduzir (Somar tudo) = 324

console.log(numerosPares);