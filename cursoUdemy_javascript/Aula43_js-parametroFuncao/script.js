//Parâmetro da Função
//função soma todos os argumentos mesmo não implementado
function funcao(a, b, c) {//a, b, c: sustenta as letras
    let total = 0;
    for (let argumento of arguments) {//argumentos que sustenta todos os argumentos enviados
        total += argumento;
    }
    console.log(total, a, b, c);//imprimir as variaveis
    //console.log(arguments);//variavel: arguments
    //console.log('valor array: ',arguments[0]);//imprimindo uma possição do array
}
funcao(1, 2, 3, 4, 5);//enviando argumento

//exemplo função 2
//argumentos são valores para as variaveis dos parametros
function funcaoDois (a,b,c,d,e,f) {
    console.log('Imprimir: ',a,b,c,d,e,f)
}
funcaoDois(1,2,3);//se não enviar valor, fica como "undefined"

//exemplo função 3
function somarDoisValor (num1, num2=0) {//passando volor se ñ for enviado
    //b = b || 0;//se não for enviado valor ele é 0 (antiga forma)
    console.log('valor: ', Number(num1 + num2));
}
somarDoisValor(2, 2)

//exeplo função 4 objetos
function aluno ({nome, sobrenome, idade}) {//no parametro faz desestruturação e retirando as variaveis
    console.log('Aluno: ',nome, sobrenome, idade);
}
aluno({nome: 'Luiz', sobrenome: 'Otavio', idade: 20});//enviando objeto literal como argumento

//exemplo função 4.1 objetos
function aluno ({nome, sobrenome, idade}) {//no parametro faz desestruturação e retirando as variaveis
    console.log('Aluno 2: ',nome, sobrenome, idade);
}
let obj = {nome: 'Luiz', sobrenome: 'Otavio', idade: 20};
aluno(obj);//enviando objeto literal como argumento

//exemplo função 4.2 array
function alunoDois ([valor1, valor2, valor3]) {//no parametro faz desestruturação e retirando as variaveis
    console.log('Aluno 3: ', valor1, valor2, valor3);
}
alunoDois(['Luiz Otavio', 'Miranda', 20]);//enviando objeto literal como argumento

//exemplo função 5 (rest operator '...numeros')
function conta(operador, acumulador, ...numeros) {//receber todo o resto depois do acumulador vai estar no ... (rest operator)
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;

    }
    console.log('Total, for of: ', acumulador);
}
conta('+', 1, 20, 30, 40, 50);//acumulador sempre 1

//exemplo 6
//function expression ->//const conta2 = function - (rest operator '...numeros')
const conta2 = function(operador, acumulador, ...numeros) {//receber todo o resto depois do acumulador vai estar no ... (rest operator)
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;

    }
    console.log('Total, function expression: ', acumulador);
};
conta2('+', 1, 20, 30, 40, 50);//acumulador sempre 1

//exemplo 7
//arrow function - const conta3 = (...args) => {codigo da função}
const conta3 = (...args) => {
    console.log(args);
}
conta3('+', 1, 10, 20, 30 , 40 ,50);
//24min
