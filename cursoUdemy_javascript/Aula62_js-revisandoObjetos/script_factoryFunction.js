//Factory function: Função fábrica
function criaPessoa(nome, sobrenome, idade) {
    //objeto literal
    return {
        nome,
        sobrenome,
        idade,
        //metodo: nomeCompleto
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome} possui ${this.idade} anos!`;
        }
    };
}
const pessoa1 = criaPessoa('Rafael', 'Freitas', 40);
console.log(pessoa1.nomeCompleto);

//18min


