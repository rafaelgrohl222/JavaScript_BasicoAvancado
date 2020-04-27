//Array = Lista ou Coleção de Coisas
//Array = É um objeto indexado automaticamente e em indice

// Ordem         0       1        2
const alunos = ['Luiz', 'Maria', 'João'];

alunos[0] = 'Eduardo';//Editando o indice [0] da lista

console.log('Por aluno:', alunos[0]);//Selecionando [0] um elemento da lista

alunos[3] = 'Luiz';//Adicionando no ultimo indice [3]

//Verificar o tamanho ou quantidade do array .length
console.log('Tamanho do Array:', alunos.length);
console.log('');//espaço

alunos.push['Luiza'];//Adicionando no ultimo indice .push
alunos.push['Fábio'];//Adicionando no ultimo indice .push
alunos[alunos.length] = 'Luana';//Adicionando no ultimo indice .length

alunos.unshift('Luiza');//Adiciona no primeiro indice [0]

console.log('Não Removido', alunos);//não removidos
console.log('');//espaço

console.log('Imprimir de 0 a 3 indice:', alunos.slice(0 , 3));//Imprimir de .slice(indice 0, ao indice 3)
const removidoFim = alunos.pop();//Remove do fim do indice []
const removidoInicio = alunos.shift();//Remove do início []
delete alunos[1];//Deletado do indice [1]
console.log('Removido do Início', removidoInicio)//removido do início do indice []
console.log('Removido do Fim:', removidoFim);//Removido do fim do indice []

console.log('');//espaço
console.log('Que tipo:', typeof alunos);
console.log('Os alunos são uma instâcia array:', alunos instanceof Array);

console.log('');//espaço
console.log('Lista de Alunos:', alunos);//Imprimir a lista