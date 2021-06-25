/**
 * Map - // Dobrar os valores
 */
// indice        0  1  2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.map(function(valor) {
    return valor * 2;
});
console.log(numerosPares);