/** função construtora de error, Tratando e lançando erros 
 * try - tente executar
 * catch - deu erro no try executa o catch
 * throw - 
 */
//try, tente executar


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