//Projeto: (For) estrutura de Repetição

//let i++ incrementa + 1 a cada volta
//imprimi de 1 em 1
console.log('----/Projeto: (For)/----');
for(let i = 0; i <= 5; i++){
    console.log(`número ${i}`);
}
//let i += 10 incrementa + 10 a cada volta
//imprimi de 10 em 10
console.log('----/Projeto: i += 10/----');
for(let i = 50; i <= 100; i += 10){
    console.log(`número ${i}`);
}
//let i = -5, começa do negativo para o positivo
console.log('----/Projeto: i = -10/----');
for(let i = -5; i <= 2; i++){
    console.log(`número ${i}`);
}
//Checar se o numero é par
console.log('----/Projeto: Checar o par/----');
for(let i = 0; i <= 10; i++){
// const (par) recebe o valor de (i) onde (% resto) 
//se o resto for = a 0 é (par) (: se não) (impar)x
    const par = i % 2 === 0 ? 'Par' : 'Impar';
    console.log(`indice (${i}) ele é (${par})`);
}
