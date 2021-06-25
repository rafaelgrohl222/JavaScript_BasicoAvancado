/**
 * Filter
 */
// indice        0  1  2   3  4  5  6  7  8  9   10  11  12
const numeros = [5,50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Filter - retornar números pares
const numerosPares = numeros.filter(function(valor) {
    return valor % 2 === 0;
});
console.log(numerosPares);