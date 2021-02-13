/** função construtora de error, Tratando e lançando erros 
 * try - tente executar
 * catch - deu erro no try executa o catch
 * throw - 
 */

 //exemplo 1
function soma (x, y) {
    if (typeof x  !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisa ser número.');
    }
    return x + y;
}
try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (error) {
    //console.log(error);
    console.log('Alguma coisa amigavel para o usuário!');
}

//exemplo 2
function somar(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new ReferenceError('num1 e num2, precisa ser números');
    }
    return num1 + num2;
}
//try, tratando o error
try {
    console.log(somar(5,6));
    console.log(somar('5',6));
} catch(err) {
    //console.log(err);
    console.log('Precisa digitar (Números)');
}