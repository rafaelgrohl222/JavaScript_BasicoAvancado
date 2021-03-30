/** FACTORY FUNCTION - Funções Fabrica
 * 
 */

function criaPessoa(nome, sobrenome, altura, peso) {
    //objeto
    return {
        nome,//this está acessando objeto nome
        sobrenome,
        //metodo, ação
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura,
        peso,
        //metodo
        imc: function() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);//toFixed(2) duas casas decimais
        }
    };
}
const pessoa1 = criaPessoa('Rafael', 'Freitas', 1.70, 100);
const pessoa2 = criaPessoa('Luiz', 'Otavio', 1.6, 42);

console.log(pessoa1.fala('Falando sobre, JS'));
console.log(pessoa1.nome);//acessa o nome
console.log(pessoa2.fala('Falando sobre, javascript'));

console.log(`Resultado IMC, P1: ${pessoa1.imc()}`);
console.log(`Resultado IMC, P2: ${pessoa2.imc()}`);

//14min