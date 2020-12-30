//Projeto Break e continue
console.log('Projeto: for of "break e continue"');
const numeros = [1,2,3,4,5,6,7,8,9];
    //for of
for (let numero of numeros) {
    //continue
    //verifica se o numero é = 2 e tula(continue) ele vai para o próximo
    if (numero === 2) {
        console.log('Pulei o númro 2');
        continue;
    }
    if (numero === 4 || numero === 6){
        continue;
    }

    //break
    //verifica se o numero é = 8 e finaliza
    if (numero === 8) {
        break;
    }
    console.log(numero);
}
console.log('');
console.log('Projeto: for in "break e continue"');
    //for 
    for (let i in numeros) {
        let numero = numeros[i];
        //continue
        //verifica se o numero é = 2 e tula(continue) ele vai para o próximo
        if (numero === 2) {
            console.log('Pulei o númro 2');
            continue;
        }
        if (numero === 4 || numero === 6){
            continue;
        }
    
        //break
        //verifica se o numero é = 8 e finaliza
        if (numero === 8) {
            break;
        }
        console.log(numero);
    }

    console.log('');
console.log('Projeto: for classico "break e continue"');
    //for 
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        //continue
        //verifica se o numero é = 2 e tula(continue) ele vai para o próximo
        if (numero === 2) {
            console.log('Pulei o númro 2');
            continue;
        }
        if (numero === 4 || numero === 6){
            continue;
        }
    
        //break
        //verifica se o numero é = 8 e finaliza
        if (numero === 8) {
            break;
        }
        console.log(numero);
    }