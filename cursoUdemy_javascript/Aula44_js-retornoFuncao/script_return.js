//função return ---/EXEMPLO 1/---
console.log('----/EXEMPLO 1/----');
function criaMultiplicador(multiplicador) {
    //Multiplicador
    function multiplicacao(num) {
        return num * multiplicador;
    }
    return multiplicacao;
}
//multiplicador
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

//multiplicacao
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

//função return ---/EXEMPLO 2/---
console.log('----/EXEMPLO 2/----');
function criaMultiplicador2(multiplicador2) {
    //usa Multiplicador
    return function(num2) {
        return num2 * multiplicador2;
    };
}
//multiplicador
const duplica2 = criaMultiplicador(2);
const triplica2 = criaMultiplicador(3);
const quadriplica2 = criaMultiplicador(4);

//multiplicacao
console.log(duplica2(3));
console.log(triplica2(3));
console.log(quadriplica2(3));

//18min