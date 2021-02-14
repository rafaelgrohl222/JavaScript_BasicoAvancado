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
    //se data for enviada e(&&) se não for uma instancia de Date(se é valido como data)
    //lanço o error
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instâcia de Date!');
    }
    //se data não for enviada
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false //24horas
    });
}
try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();//enviar (data) sem error, enviar string e number (dá erro) 
    console.log(hora);
} catch (err) {
    //tratar error
    //console.log(err);//emite error
} finally {
    console.log('Tenha um bom dia!')
}


//11min
