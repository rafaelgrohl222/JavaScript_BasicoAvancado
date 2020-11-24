//Atribuição via Desetruturação (Objetos)
const pessoa = {
    //atributos
    //nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    //sub-atributos
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};
//console.log(pessoa);//Imprimi o objeto: pessoa
//console.log(pessoa.nome);//imprimi atributo nome do objeto pessoa

//Atribuição via Desetruturação
const {nome = 'não existe', sobrenome, idade} = pessoa;
console.log(pessoa.nome);//resultado: undefined
console.log(nome, sobrenome, idade);
//4min