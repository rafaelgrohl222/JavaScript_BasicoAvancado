/*
* Objeto utiliza chaves {objetos literais};*/
console.log('-----Objetos-----');//espaço
const pessoas = {
    nome: 'Luiz',//atributos
    sobrenome: 'Miranda',//atributos
    idade: 25,//atributos

    //metodo
    fala() {
        //this = este objeto ->pessoas
        console.log(`${this.nome} ${this.sobrenome}, de ${this.idade} anos!`);
    },
    incrementaIdade(){
        ++this.idade;
    }
};
pessoas.fala();//25 anos
pessoas.incrementaIdade();
pessoas.fala();//26 anos
pessoas.incrementaIdade();
pessoas.fala();//27 anos

console.log('Nome:', pessoas.nome);//imprimi luiz
//console.log(pessoas);

console.log('-----Função + Objetos-----');//espaço

                  //(parâmetro)
function criaPessoa(nome, sobrenome, idade){
    return { nome, sobrenome, idade}
}
const pessoa1 = criaPessoa('Luiz', 'Miranda','25');//valor(Argumento) passa p/ o (parametro)
const pessoa2 = criaPessoa('Maria', 'Otávio','32');
const pessoa3 = criaPessoa('João', 'Moreira','55');
const pessoa4 = criaPessoa('Junior', 'Lara','44');
const pessoa5 = criaPessoa('Jean', 'Otávio','69');

console.log('Nome-01:', pessoa1.nome);
console.log('Nome-02:', pessoa2.nome);
console.log('Nome-03:', pessoa3.nome);