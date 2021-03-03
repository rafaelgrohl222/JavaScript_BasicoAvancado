//Exemplo 1
//Maneira de Declarar Função - classica (function hoisting)
console.log('------/Função - classica/------');
function falaOi() {
    const oi = 'Fala Oi';
    console.log('Função:', oi);
}
falaOi();
console.log('');//espaço

//Exemplo 2
console.log('------/function expression/------');
//First-class object (Objetos de primeira classe)
//function expression
const souUmDado = function() {
    console.log('Sou um dado!');
};
//souUmDado()//não Chama a função

//souUmDado();//função de baixo executa a de cima
function executaFuncao(funcao) {
    console.log('Vou executar abaixo:')
    funcao();
}
executaFuncao(souUmDado);
console.log('');//espaço

//Exemplo 3
//Arrow function
console.log('------/Arrow function/------');
const funcaoArrow = () => {
    console.log('Sou uma arrow function!');
};
funcaoArrow();
console.log('');//espaço

//Exemplo 4
//Dentro de um objeto
console.log('------/Dentro de um objeto/------');
const obj = {
    //falar: function () {
      falar() {//outra função dentro do objeto
        console.log('Estou falando...')
    }
};
obj.falar();

