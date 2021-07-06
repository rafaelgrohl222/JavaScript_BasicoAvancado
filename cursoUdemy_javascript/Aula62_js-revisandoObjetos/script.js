//objetos
const pessoa1 = new Object();

pessoa1.nome = 'Rafael';
pessoa1.sobrenome = 'Freitas';
pessoa1.idade = 30;

//metodo: fala nome
pessoa1.falaNome = function() {
    return (`${this.nome}, cadastro com sucesso!`);
};
//metodo: retorna data nascimento
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();//data atual
    return dataAtual.getFullYear() - this.idade//ano atual
};
console.log(`Nascido em: ${pessoa1.getDataNascimento()}`);

//12min