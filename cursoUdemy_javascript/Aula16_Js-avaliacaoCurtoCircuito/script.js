/***AVALIAÇÃO CURTO CIRCUITO***
 * &&: AND / E - Os dois valores verdade -> Retorna => True;
 * ||: OR / OU - Pelo menos um verdade -> Retorna => True;
 
 *** RETORNA FALSE***
 * '', "", `` string vazia -> Retorna => Vazio
 * FALSY -> Retorna => false
 * false -> Retorna => false
 * 0 = Zero -> Retorna => false
 * null -> Retorna => undefined
 * NaN - Not a Number -> Retorna => false
 */
//***APLICANDO && E*** SEMPRE PROCURA A 1ª VERDADE P/ RETORNAR
console.log('Retorna &&:', 'Luiz' && 'Maria');//retorna: Maria o ultimo: verdade
console.log('Retorna &&:','rafael' && null);//retorna: null

//***APLICANDO || OR / OU*** SEMPRE PROCURA A 1ª VERDADE P/ RETORNAR
//Espaço
console.log('Retorna ||:',0 || 'Luiz');//Retorna; 0 zero
console.log('Retorna ||:',NaN || 'Maria' || "");//Retorna: O primeiro FALSE

console.log();//Espaço

//***APLICANDO && 'AND / E'***//
console.log('***APLICANDO && "E"***');
function falaOi () {
    return 'oi';
}
//Desvio de Fluxo
//AVALIAÇÃO CURTO CIRCUITO
let vaiExecutar = 'Joãozinho';
console.log('Aplicando &&:', vaiExecutar && falaOi());

console.log();//Espaço

//***APLICANDO || 'OU / OR'***//s
//EXEMPLO 1 - || OR = OU
console.log('***APLICANDO || "OU"***');

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';
console.log('Cor Padrão:', corPadrao);

console.log();//ESPAÇO

//EXEMPLO 2 - || OR = OU
const a = 0;
const b = null;
const c = 'false';//String
const d = false;
const e = NaN;
//se todas são falsas retornará: A ultima
console.log('Retorna ||:', a || b || c || d || e);
