//return
//função somar
/*
function soma(a, b) {
    return a + b;
}
console.log(soma(2, 6));

//função cria pessoa (objetos)
function criaPessoa (nome, sobrenome) {
    return { nome, sobrenome };
}
const pessoa1 = criaPessoa('rafael', 'freitas');

const pessoa2 = {
    nome: 'Rogério',
    sobrenome: 'Tardele'
};
console.log(pessoa1, pessoa2);
*/
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;//retornando o resto da frase
    }
    return falaResto;
}
const fala = falaFrase('Olá');
const resto = fala('mundo!');

console.log(resto);

//13min