/**
 * new objetos
 */

//objeto pessoa1 ()
const pessoa1 = new Object();
    pessoa1.nome = 'Rafael';
    pessoa1.sobrenome = 'Freitas';

//objeto pessoa2
    const pessoa2 = {
        nome: 'Luiz',
        sobrenome: 'Otávio'
    }

//exemplo-1-exibir
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

console.log('');//espaço

//exemplo-2-exibir
delete pessoa1.nome;//deletando o objeto
console.log(pessoa1, pessoa2);

//8min