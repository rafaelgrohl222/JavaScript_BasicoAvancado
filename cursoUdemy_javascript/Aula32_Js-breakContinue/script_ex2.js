//projeto for in, for classico, for of
const numeros = [1,2,3,4,5,6,7,8,9];

console.log('Projeto: for in');
//for in
for (let i in numeros) {
    let numero = numeros[i];
    if(numero === 2){
        continue;
    }
    console.log(numeros[i]);
}

console.log('Projeto: for of');
//for of
for (let numero of numeros) {
    
        if(numero === 2) {
            continue;
        }
    console.log(numero);
}
 
console.log('Projeto: for classico');
//for classico
for (let i = 0; i < numeros.length; i++) {

    if(i === 2) {
        continue;
    }
    if(i === 7) {
        break;
    }
    console.log(i);
}
