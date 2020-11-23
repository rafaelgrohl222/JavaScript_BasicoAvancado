// let - Tem scopo de bloco {primeiro ler o bloco...}
//var - tem scopo de funcition

//Escopo Global
console.log('Projeto: Mais informação let, var e const');
const verdadeiro = true;

let nome = 'Luiz';
var nome2 = 'Luiz_2';

if(verdadeiro){
    let nome = 'Otávio';//criando variável
    var nome2 = 'Rogério';
    
    //Bloco Alinhado
    if(verdadeiro){
        var nome2 = 'Ronaldo';
        let nome = 'Outra coisa';
    }
}
console.log(nome, nome2);

//funcition
var sobrenome = 'Freitas';
    function falaOi(){
        console.log('Projeto: funcition');
        var nome = 'Rafael';
        console.log(nome, nome2);
    }
    falaOi();

//Hoisting - Elevação da variável com (var)
console.log('');//espaço
console.log('Projeto: Hoisting');
console.log(nomes);//var = undefined
//...
var nomes = 'Douglas';

//Hoisting - Não existe elevação da variável com (let)
console.log(nomes2);
//...
let nomes2 = 'Tadeu';
//Resultado: error 'Não é possível acessar 'nomes2' antes da inicialização'