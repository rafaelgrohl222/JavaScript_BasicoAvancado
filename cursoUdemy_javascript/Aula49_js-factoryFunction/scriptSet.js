/** FACTORY FUNCTION (FUNÇÃO FABRICA)
 * Getter (get)
 */

 function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        //Getter/obter - nomeCompleto
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter/configurar - nomeCompleto
        set nomeCompleto(valor) {
            valor = valor.split(' ');//virou array/vetor separado po ''
            this.nome = valor.shift();//retorna 1º valor e remove o var array
            this.sobrenome = valor.join(' ');//pegar o resto e juntar na string e separa por 'espaço'
            console.log(valor);
        },

        //---Metodo/ação - falar---//
        falar: function(assunto = 'falando sobre NADA..') {
            return `${this.nome}, está ${assunto}`;//this,recebe o valor de dentro do objeto{}
        },
        altura,
        peso,

        //---Getter/obter - imc---//
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);//retorna 2 casas decimais
        }
    };
}
//variaveis
const pessoa1 = criaPessoa('Luiz', 'Otávio', 1.79, 100);
const pessoa2 = criaPessoa('João', 'Otávio', 1.79, 100);
const pessoa3 = criaPessoa('Junior', 'Otávio', 1.79, 100);

pessoa1.nomeCompleto = 'Maria Oliveira Silva';

//console
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.nomeCompleto);
console.log(pessoa1.falar());

console.log('');//espaço

console.log(`IMC Pessoa 1: ${pessoa1.imc}`);
console.log(`IMC Pessoa 2: ${pessoa2.imc}`);
console.log(`IMC Pessoa 3: ${pessoa3.imc}`);