/** Constructor Function
 *  Funções Construtoras
 *  Construtora - Começa com caixa alta
 * new - cria um objeto vazio, 
 * faz o this apontar para o objeto utilizado e retorna para a variavel 'pessoa1'
 */ 
function Pessoa(nome, sobrenome) {
    ///Atributos ou métodos privados, só está disponível aqui dentro
    const ID = 123456;
    //Guardar dados
    const metodo = function() {

    };
    //Atributos ou métodos públicos, acessa de fora
    this.nome = nome;
    this.sobrenome = sobrenome;

    //metodo
    this.metodo = function() {
        console.log(this.nome + ': Sou um método!');
    }
}
const pessoa1 = new Pessoa('Luiz','Otávio');
const pessoa2 = new Pessoa('Rafael','Freitas');

pessoa1.metodo();//chama o metodo

console.log(`Pessoa 1: ${pessoa1.nome} ${pessoa1.sobrenome}`);