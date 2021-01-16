//--------FUNÇÃO 1--------//
console.log('--FUNÇÃO 1--');
function saudacao(nome){
    //console.log('Bom Dia!', nome);
    return `Bom Dia, ${nome}!`;
}
const variavel = saudacao('Rafael');
console.log(variavel);

//--------FUNÇÃO 2--------//
console.log('');//ESPAÇO
console.log('--FUNÇÃO 2--"SOMA"');

function soma( x, y){
    const resultado = x + y;
    return resultado;//abaixo de return não é executado
    console.log('Ola Mundo!');
}
const resultado = soma(2, 4);
console.log('Resultado de 2 + 4:', resultado);

//--------FUNÇÃO 3--------//
console.log('');//ESPAÇO
console.log('--FUNÇÃO 3--"ANONIMA"');

// variável recebe a function (finalizar com ";")
const raiz = function(num1) {
    return num1 ** 0.5;
};
console.log('Raiz de 9:',raiz(9));

//--------FUNÇÃO 4--------//
console.log('');//ESPAÇO
console.log('--FUNÇÃO 4--"ELOQUENT FUNCTION"');

const raiz2 = (num2) => {
    return num2 ** 0.5;
};
console.log('Raiz de 16:', raiz2(16));

//--------FUNÇÃO 5--------//
console.log('');//ESPAÇO
console.log('--FUNÇÃO 5--"ELOQUENT FUNCTION - Simplificação"');

const raiz3 = num3 => num3 ** 0.5;

console.log('Raiz de 25:', raiz3(25));