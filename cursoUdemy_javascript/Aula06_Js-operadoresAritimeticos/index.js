/**OPERADORES ARITIMÉTICOS
 *  + Adição / Concatenação
 *  - Subtração
 *  / Divisão
 *  * Multiplicação
 *  ** Potenciação
 *  % Resto da Divisãos
 * 
 *   ++ Incremento
 *   -- Decremento
 * 
 ** PRECEDÊNCIA
 *  1º () parenteses
 *  2º ** potenciação
 *  3º *, /, %
 *  4º 4, -
 * 
 * NAN Not A Number - não é um numero
 * 
 * CONVERÇÃO: parseInt(inteiro), parseFloat(Decimal), Number(numero)
*/

const num1 = 5;
const num2 = 10;
console.log('Resultado:', num1 + num2);

const passo = 2;
let contador = 1;
contador = contador + passo;
console.log('Resultado:', contador);

let contador2 = 2;
contador2 *= 2;
console.log('Resultado:', contador2);

let numero1 = 5;
let numero2 = parseInt('10');
let numero3 = parseFloat('5.2');
console.log(typeof numero3);

