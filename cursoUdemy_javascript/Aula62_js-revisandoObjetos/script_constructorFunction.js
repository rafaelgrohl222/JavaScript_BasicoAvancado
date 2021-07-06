//Constructor function: Constructor function
//Retorna : Objeto literal
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    //Object.freeze(this);//não pode alterar nada do valor (this)
}

const pessoa1 = new Pessoa('Rafael', 'Freitas');
pessoa1.nome = 'Outar Coisa';//alterando o valor da variável
//pessoa1 = 'Outra Coisa 2';//não pode alterar a variável
const pessoa2 = new Pessoa('Melissa', 'Abecassis');

console.log(pessoa1);
console.log(pessoa2);

//30min

