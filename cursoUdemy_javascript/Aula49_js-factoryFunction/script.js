/** FACTORY FUNCTION - Funções Fabrica
 * 
 */

function criaPessoa(nome, sobrenome, altura, peso) {
    //objeto
    return {
        nome,//this está acessando objeto nome
        sobrenome,

        //Getter, obter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter, configurar
        set nomeCompleto(valor) {
            valor = valor.split(' ');//split, dividir o array/vetor
            this.nome = valor.shift();//retorna o 1º valor e remove o 1º nome
            this.sobrenome = valor.join(' ');//pega o resto'Oliveira Silva' juntar em 1 string e separar espaço
            console.log(valor);//valor da pessoa3
        },

        //---metodo, ação---//
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura,
        peso,

        //---metodo, ação---//
        imc: function() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);//toFixed(2) duas casas decimais
        },

        //---Getter, obter---//
        get imc2() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);//toFixed(2) duas casas decimais
        }
    };
}
const pessoa1 = criaPessoa('Luiz', 'Otavio', 1.70, 100);
//const pessoa2 = criaPessoa('Luiz', 'Otavio', 1.6, 42);
pessoa1.nomeCompleto = 'Maria Oliveira Silva';//valor setter

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
//console.log(pessoa1.fala('Falando sobre, JS'));
//console.log(pessoa1.nome);//acessa o nome
//console.log(pessoa2.fala('Falando sobre, javascript'));

//console.log(`Resultado IMC, P1: ${pessoa1.imc()}`);//Metodo
//console.log(`Resultado IMC, P2: ${pessoa2.imc()}`);//Metodo
//console.log(`resultado IMC, Get: ${pessoa2.imc2}`);//getter
//console.log(`Resultado, nome completo: ${pessoa1.nomeCompleto()}`);//usando (this)

//14min