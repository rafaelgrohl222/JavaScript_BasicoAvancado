/**
 * Revisando Objetos
 */

//Objetos Literal
console.log('<----Objeto-Literal-ex.-1---->');
const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Freitas'
};
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
//--------------------------//--------------------------
console.log('');//espaço

console.log('<----Objeto-Literal-ex.-2---->');
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);
//--------------------------//--------------------------
console.log('');//espaço

console.log('<----Objeto-acessando-dinamicamente-ex.1---->');

const chaveNome = 'nome';
const chaveSobrenome = 'sobrenome';

console.log(pessoa['nome']);
console.log(pessoa[chaveSobrenome]);
