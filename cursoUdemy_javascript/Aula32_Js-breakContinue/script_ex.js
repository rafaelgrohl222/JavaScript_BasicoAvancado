//Projeto break e continue

const numeros = [1,2,3,4,5,6,7,8,9];

//-------For of-------
console.log('Projeto: For of');
//for of
for (let numero of numeros) {
    //continue
    if (numero === 2){
        continue;
    }
    //continue
    if (numero === 5 || numero === 7) {
        continue;
    }
    console.log(numero);
}

//-------For in-------
console.log('Projeto: For is');
//for in
for (let i in numeros) {

    let numero = numeros[i];
        //continue
        if (numero === 2) {
        continue; 
        }
        //break
        if (numero === 8){
            break;
        }
    console.log(numero);
}

//-------For classico-------
console.log('Projeto: For classico');
//for classico
for (let i = 0; i < numeros.length; i++){
    
    let numero = numeros[i];

    console.log(numero);
}