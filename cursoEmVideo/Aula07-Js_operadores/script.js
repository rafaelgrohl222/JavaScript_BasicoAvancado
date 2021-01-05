/*Curso em Video - Aula 07 - OPERADORES
* (+)  Adição
* (-)  Subtração
* (*)  Multiplicação
* (/)  Divisão
* (%)  Resto, da divisão inteira (0,2)
* (**) PotÊncia (5 ** 2 = 5 ao quadrado 2)
* PRECEDENCIA (ORDEM DE SEQUENCIA de operadores aritimeticos)
* 1- (), 
* 2- **, 
* 3- * e / e %
* 4- + e -
* ATRIBUIDORES DE ADICAO
* +=, -=,*=,/=,%=,**=
* Pos-INCREMENTO
*n++(soma depois mais 1) ou n--(tira depois menos 1)
Pos-INCREMENTO
*++n(soma antes mais 1) ou --n(tira antes menos 1)
*/

var a = 5 + 3;//8
console.log('Resultado de "a" 5 + 3:', a);
var b = a % 5;//3
console.log('Resultado de "b" a % 5:', b);
var c = 5 * b ** 2;//45
console.log('Resultado de "c" 5 * b ** 2:', c);
var d = 10 - a / 2;//6
console.log('Resultado de "d" 10 - a / 2:', d);
var e = 6 * 2 / d;//2
console.log('Resultado de "e" 6 * 2 / d:', e);
var f = b % e + 4 / e;//3
console.log('Resultado de "e" b % e + 4 / e:', e);
//var n = n + 4;//exemplo 1
var n = 3;//3
n += 4;//auto atribuicao (3+4=7)
console.log('auto atribuicao:',n);
//Pos-Incrementa
var n2 = 3;
n2++;
console.log('Pos-incremento:',n2);
//Pos-Decrementa
var n1 = 3;
n1--;
console.log('Pos-decremento:',n1);
var n3 = 3;
++n3;
console.log('Pre-incremento:',n3);





