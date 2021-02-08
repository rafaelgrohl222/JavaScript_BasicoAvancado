//Variáveis Compostas - Curso JavaScript #15

let num = [5,3,2];
num[3] = 6;//num recebe 6 na posição 3
num.push(7)//acrecentar na ultima posição

console.log(`Meu array: (${num})`);//imprimir array
console.log(`Meu primeiro valor do vetor é (${num[3]})`);//imprimir indice
console.log(`tamanho do meu array: (${num.length})`);//imprimir quantos array
console.log(`Meu array, ordem crescente: (${num.sort()})`);//metodo imprimir ordem crescente
console.log(`Localizar o indice (x): ${num.indexOf(1)}`);//localiza o indice no (), -1 não encontrou

//estrutura de repetição, imprima os array dos indices
//estrutura (for tradicional)
for(let pos = 0; pos < num.length; pos++){
    console.log(`Indices do array (${pos}) e tem o valor (${num[pos]})`);//array na tela
}
console.log('----//----');//espaço

//estrutura (for in)
for(let pos in num){
    console.log(`Indices do array (${pos}) e tem o valor (${num[pos]})`);//array na tela
}
//17min