/*OPERADORES RELACIONAIS (sinais booleam)
*   > maior
*   < menor
*   >= maior igual
*   <= menor igual
*   == igual
*   === igualdade restrita (verifica se e mesmo tipo e valor 5 == '5')
*   !== desigual restrito (verifica se nao e mesmo tipo e valor iguais 5 == '5')
*   != diferente
* ----LOGICOS----
*   ! negação
*   && conjunção (e) verdade os 2
*   || dijunção (ou) 1 ou outro verdade
*----Operadores ternarios (media>=7.0 ? 'Aprovado' : 'Reprovado')
*   : true
*   ? false
*/

var n1 = 5 > 2;
console.log('Valor 5 > 2:', n1);
var n2 = 7 < 4;
console.log('Valor 7 < 4:', n2);
var n3 = 8 >= 8;
console.log('Valor 8 >= 8:', n3);
var n4 = 9 <= 7;
console.log('Valor 9 <= 7:', n4);
var n5 = 5 == 5;
console.log('Valor 5 == 5:', n5);
var n6 = 6 === '6';
console.log('Valor 6 === 6:', n6);
var n7 = 4 != 4 || 6 === '6';
console.log('Valor 4 != 4 || 6 === "6"', n7);

var media = 5.5;
media += 3.0;
var resultado = media > 7 ? 'Aprovado' : 'Reprovado';
console.log(`Resultado da media: ${media} o aluno foi "${resultado}"`);

//aula 8 7min
