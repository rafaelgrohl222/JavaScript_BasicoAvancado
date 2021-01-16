/***OPERADORES DE COMPARAÇÕES***

* > maior que
* >= maior que "ou" igual a
* < menor que
* <= menor que "ou" igual a
* == igualdade (valor) ***não usar***
* === igualdade estrita (valor e tipo) ***usar***
* != diferente ***não usar***
* !== diferente estrito (valor e tipo) ***usar***
*/

// > MAIOR que
const num1 = 10;
const num2 = 5;
const result = (num1 > num2);
console.log('Resultado ">":', result);

// >= MAIOR QUE "OU" IGUAL A
const num3 = 10;
const num4 = 10;
const result2 = (num3 >= num4);
console.log('Resultado ">=":', result2);

// MENOR QUE
const num5 = 5;
const num6 = 10;
const result3 = (num5 < num6);
console.log('Resultado "<":', result3);

//MENOR QUE "OU" IGUAL A
const num7 = 10;
const num8 = 10;
const result4 = (num7 <= num8);
console.log('Resultado "<=":', result4);

//IGUALDADE
const num9 = 5;//number
const num10 = '5';//String
const num11 = '5';//String
const result5 = (num9 == num10);//number == String?
const result6 = (num9 === num11);//number === String?
console.log('Resultado "==":', result5);//compara(valor) JS converte auto
console.log('Resultado "===":', result6);//compara(valor e tipo)

// != DIFERENTE e !== DIFERENTE ESTRITO (VALOR E TIPO)
const num12 = 5;//number
const num13 = 10;//number
const num14 = 'A';//String
const result7 = (num12 != num13);//number != String?
const result8 = (num12 !== num14);//number !== String?
console.log('Resultado "!=":', result7);//compara(valor) JS converte auto
console.log('Resultado "!==":', result8);//compara(valor e tipo)



