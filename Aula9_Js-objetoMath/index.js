let num1 = 9.54578;

/*ARREDONDAMENTO P/ Baixo */
let num2 = Math.floor(num1);
console.log('Arrendondar P/ Baixo:', num2);

/*ARREDONDAMENTO P/ Cima */
let num3 = Math.ceil(num1);
console.log('Arredondar P/ Cima:', num3);

/*ARREDONDAMENTO P/ O MAIS PRÓXIMO */
let num4 = Math.round(num1);
console.log('Arredondar mais Próximo:', num4);

/*PEGAR O MAIOR ENTRE OS NÚMEROS */
let num5 = Math.max(1, 2, 3, 4, 5, -10, -50, 150, 1500, 6, 7, 8, 9, 10);
console.log('Maior número entre estes números:', num5);

/*PEGAR O MENOR ENTRE OS NÚMEROS */
let num6 = Math.min(1, 2, 3, 4, 5, -10, -50, 150, 1500, 6, 7, 8, 9, 10);
console.log('Menor número entre estes númeors', num6);

/*GERAR NÚMERO ALEATÓRIO ENTRE 10 e 5*/
//Math.round = arredonda para o mais próximo
let aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log('Números aleatórios etre "10 e 5":', aleatorio);

/*POTÊNCIAÇÃO ENTRE NUMEROS */
let potenciaEntreNumeros = Math.pow(2, 10);
console.log('1ª Potênciação entre 2 e 10:', potenciaEntreNumeros);

//2ª Opção
let potenciaEntreNumeros2 = (2**9);
console.log('2ª Potênciação entre 2 e 9:', potenciaEntreNumeros2);

//3ª Opção
let potenciaEntreNumeros3 = 2;
let potenciaEntreNumeros4 = 9;
let resultado = (potenciaEntreNumeros3 ** potenciaEntreNumeros4);
console.log('3ª Potênciação entre 2 e 9:', resultado);



