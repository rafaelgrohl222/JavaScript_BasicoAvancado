/** função construtora de error, Tratando e lançando erros 
 * try - tente executar
 * catch - deu erro no try executa o catch
 * finally - sempre vai executar (não é bom colocar sempre)
*/

/* inicio
try {
    console.log(erroProposital);
    console.log('[try] Abrir arquivo');
    console.log('[try] Manipula arquivo');
    console.log('[try] Não fechei arquivo');
} catch(error) {
    console.log('[catch] Tratando o error');
} finally {
    console.log('[FINALLY] Sempre vou executar');
}
fim*/

function retornaHora(data) {
    //se data é instancia de Date(se é valido como data)
    if(!(data instanceof Date)) {
        throw new TypeError('Esperando instâcia de data!')
    }
}
//09min
