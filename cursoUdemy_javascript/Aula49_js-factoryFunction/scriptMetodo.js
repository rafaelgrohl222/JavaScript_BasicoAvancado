/** FACTORY FUNCTION (FUNÇÃO FABRICA)
 * Metodo
 */

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        //---Metodo/ação - falar---//
        falar: function(assunto) {
            return `${this.nome}, está ${assunto}`;//this,recebe o valor de dentro do objeto{}
        },
        altura,
        peso,

        //---Metodo/ação - imc---//
        imc: function() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);//retorna 2 casas decimais
        }
    };
}
//variaveis
const pessoa1 = criaPessoa('Rafael', 'Freitas', 1.79, 100);
const pessoa2 = criaPessoa('Maria', 'Joaquina', 1.63, 56);
//console
console.log('/----Pessoa 1----/');
console.log(pessoa1.falar('falando sobre JS'));
console.log(`IMC P1: ${pessoa1.imc()}`);
console.log(pessoa1.nome);

console.log('');//espaço

console.log('/----Pessoa 2----/');
console.log(pessoa2.falar('falando sobre JS'));
console.log(`IMC P2: ${pessoa2.imc()}`);
console.log(pessoa2.nome);

//13min

