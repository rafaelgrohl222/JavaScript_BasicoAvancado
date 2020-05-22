/***OPERADORE LÓGICOS***

* && -> AND = E - TODAS AS EXPRESSÕES PRESA SER VERDADEIRAS P/ RETORNAR: TRUE
* || -> OR = OU - PELO MENOS 1 EXPRESSÃO PRECISA SER VERDADEIRA P/ RETORNAR: TRUE
* ! -> NOT = NÃO
*/

// && = as duas expressões tem que ser verdadeira: VERDADE
const exprecaoAnd = (true && true && true && true);
console.log('Resultado &&:', exprecaoAnd);

// || = uma das expressões tem que ser verdade: VERDADE
const exprecaoOr = (true || false || false || false);
console.log('Resultado ||:', exprecaoOr);

// ! = Negação
console.log('resultado !:', !true);//Negando true

console.log();//ESPAÇO

//APLICANDO &&
const usuario = 'Luiz';//form que usuário digitou
const senha = 123456;//form que usuário digitou

    const vaiLogar = (usuario === 'Luiz' && senha === 123456);//Base de dados
    console.log('Usuário e Senha:', vaiLogar);//Mensagem ao usuário

//APLICANDO ||
console.log();//ESPAÇO

const usuario2 = 'Rafael';//form que usuário digitou
const senha2 = 1234;//form que usuário digitou

    const vaiLogar2 = (usuario2 === 'Rafael' || senha2 === 12);//Base de dados
    console.log('Usuário ou Senha', vaiLogar2);//Mensagem ao usuário

