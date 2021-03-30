/** FACTORY FUNCTION (FUNÇÃO FABRICA)
 * Getter (get)
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

        //---Getter/obter - imc---//
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);//retorna 2 casas decimais
        }
    };
}
//variaveis
const pessoa1 = criaPessoa('Rafael', 'Freitas', 1.79, 100);

//console
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(`IMC: ${pessoa1.imc}`);//atributo da class

//15min