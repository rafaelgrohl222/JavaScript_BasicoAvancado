/**
 * For Each (Exibir os valores, não edita)
 * Só está no (array)
 */

const numeros = [10, 20, 30];

//<----exemplo-01---->
console.log('<----exemplo-1---->');
for(let valor of numeros) {
    console.log(valor);
}

console.log('');//espaço

//<----exemplo-2---->
console.log('<----exemplo-2---->')
numeros.forEach(function(valor,indice, array) {

    console.log('Indice:', indice, 'Valor:', valor,'Array:', indice);
    console.log(array);
});

console.log('');//espaço

//<----exemplo-3---->
//Arrow function
console.log('<----exemplo-3---->');
let total = 0;
numeros.forEach(valor => {
    total += valor;
});
console.log(total);

//min2