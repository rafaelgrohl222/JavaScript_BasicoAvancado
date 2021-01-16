/*--Projeto For in--*/
//for in -> lê os indice: [array] e chaves{objeto} dos objetos

//array
const frutas = ['Pera', 'Maçã', 'Uva'];

//objeto
const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Freitas',
    idade: 40
};

//Projeto for in objeto
console.log('projeto: for in objeto');
console.log('Array completo:');
    for(let indice in frutas){
        console.log(frutas);
    }

//Projeto for in array - ex1
console.log('');//espaço
console.log('projeto: for in array');
console.log('Array completo:');
    for(let indice in frutas){
        console.log(frutas);
}
//Projeto for in array - ex2
console.log('');//espaço
console.log('projeto: for in array');
console.log('Array detalhado:');
    for(let indice in frutas){
        console.log(`indice: ${indice} e fruta: ${frutas[indice]}`);
}

/*--Projeto For tradicional--*/
console.log('');//espaço
console.log('Projeto: for tradicional');
//(for) tradicional
    for(let indice = 0; indice < frutas.length; indice++){
        console.log(indice, frutas[indice]);
}

//1min