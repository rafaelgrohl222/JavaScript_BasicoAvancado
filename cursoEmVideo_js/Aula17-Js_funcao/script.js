//Funções - Curso JavaScript #16
/** Funções:
 * (São ações executadas assim que são chamadas
 * ou decorrente de algum evento).
 * 
 * (Uma função pode receber um parâmetro e retornar um resultado)
 */
//exemplo 1
    let num2 = 50;
 function parImp(num) {
     if(num%2 == 0) {
         return 'par';
     } else {
         return 'impar';
     }
 }
 let res = parImp(num2);
 console.log(`Resultado é: ${res}`);

 //exemplo 2
 //se não paasar o valor: num1=0
 function soma (num1=0, num3=0) {
     return num1 + num3;
 }
 console.log(`A soma é: ${soma(5,8)}`);
 console.log('Soma é: ', soma(9));

 //exemplo 3
let valor = function(numM) {
    return numM*2;
}
console.log(`Próssimo valor: ${valor(5)}`);
//17min