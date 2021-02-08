//Variáveis Compostas - Curso JavaScript #15

let num = [9, 2, 8, 5];
    console.log(`Array original: (${num})`);
    num.push(3);//incluiu na ultima posição o 3
    num.sort();//ordem crescente
    console.log(`Ordem crescente: (${num})`);

let pos = num.indexOf(4);//posição do valor 8

    if(pos == -1){
        console.log(`O valor (não EXISTE)`);
    } else {
        console.log(`O indece é: ${pos}`);//inicia do indice 0
    }