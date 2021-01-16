window.alert('Curso em Video');
window.confirm('Manipulando dados number em "Javascript"?');

//STRING -> NUMBER
/*
Number.parseInt(n)//converter numero inteiro (2) 
Number.parseFloat(n)//converter numero real (1.4)
Number(n)//converte numero real e inteiro (2, 1.4)
n1.toFixed(2) // casas decimais com 2 (00.00)
n1.toFixer(2).replace('.',',')

/*------IMPORTANTE------BRL-USD-EUR
localizacao por regiao, corrigir p/ corrigir por 'dinheiro' dinheiro real do brasil
n1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
*/
var n1 = Number(window.prompt('Digite o primeiro numero:'));
var n2 = Number(window.prompt('Digite o segundo numero:'));
var soma = n1 + n2;
//soma.toFixed(2)//casas decimais com 2
//soma.replace('.',',')
window.alert('Soma: ' + soma.toFixed(2).replace('.' , ','));
window.alert(`Soma: ${soma.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`);

//parei aula 7 time 1min