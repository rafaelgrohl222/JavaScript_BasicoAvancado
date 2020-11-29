//Atribuição via Desetruturação (Objetos)
console.log('Projeto: --Atribuição via Desetruturação (Objetos)--');
const pessoa = {
    //atributos
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    //sub-atributos
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};
console.log(pessoa);//Imprimi o objeto: pessoa
console.log(pessoa.nome);//imprimi atributo nome do objeto pessoa
//const {nome = 'não existe', sobrenome, idade} = pessoa;

console.log('-------//-------');//espaço
//-------------------//-----------------

//Imprimi objeto - Pessoa
console.log('--objeto: Pessoa--');
//nome: teste (criando variavel 'teste')
console.log(pessoa.nome);//resultado: undefined, caso chamar o atributo e não existir

const {nome: teste, sobrenome, idade} = pessoa;//objeto pessoa
console.log(teste, sobrenome, idade);

console.log('-----//-----');//espaço

//Imprimi objeto - endereco
console.log('--objeto: Endereço--');
const {endereco: {rua, numero}, endereco } = pessoa;//objeto endereco
console.log(rua, numero, endereco);

console.log('-----//-----');//espaço

//Imprimi o resto do objeto
console.log('--objeto: Resto--');
const {nome, ...resto} = pessoa;//nome não imprimi e o resto sim
console.log(resto, rua);//imprimir atributo: restante de menos o'nome'
