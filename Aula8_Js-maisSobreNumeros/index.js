let num1 = 10.383764558;
let num2 = 2.5;

num1 += num1 + num2;//num1 = num1 + num2;
console.log('num1= num1 + num2:', num1);//

/*converter temporariamente em "String"*/
//temporariamente em "String", (2)converção binária
console.log('Temporariamente "string":', num1.toString() + num2);

/*transformando o number em "String"*/
num1 = num1.toString();//.toString();

/*verivicando se existe casa decimaia "true ou false"*/
console.log('Casas decimais ou Não?:', Number.isInteger(num1));//.isInteger(let)

/*TEMPORARIAMENTE NUMBER + CONVERÇÃO BINÁRIA*/
console.log('Converção Binária:', num1.toString(2));//.toString(2)//converção Binária

/* ARREDONDAMENTO DE CASAS DECIMAIS*/
console.log('Arredondamento Casas decimais:', num2.toFixed(2));//.toFixed(casasDecimais)

/* CONFERÊNCIA DE LET SE NÃO É NUMERO*/
let temp = num1 * 'ola';
console.log('Não é um number?:', Number.isNaN(temp));//.isNaN(let)

/*PRECISÃO DE NUMEROS C/ CASAS DECIMAIS- IEEE 754-2008*/
let num3 = 0.7;// Number
let num4 = 0.1;// Number

num3 += num4;// 0.8
num3 += num4;// 0.9
num3 += num4;// 1.0

console.log('Resultado:', num3);//13min aula 21.
