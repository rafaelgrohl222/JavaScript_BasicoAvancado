/**OPERAÇÃO TERNÁRIA ? ou :*/
//(condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 999;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP!' : 'Usuário NORMAL!';
console.log(nivelUsuario);

const corUsuario = null;//escolha do usuário
//fallback = setando do valor
const corPadrao = corUsuario || 'Preta';
console.log(nivelUsuario, corPadrao);

/*Condição if e else
  if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP!');
} else {
    console.log('Usuári NORMAL!');
}
*/
