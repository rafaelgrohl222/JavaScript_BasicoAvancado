//Escreve uma função que recebe 2 numeros e retorne o maior deles

//exemplo 1
console.log('------/exemplo 1/------');
function max(x, y) {
    if(x > y) {
        return x;
        // console.log(`o número maior é o (X): ${x}`);
    }else{
        return y;
        // console.log(`o número maior é o (y): ${y}`);
    }
}
console.log(max(1, 2));//maior dos número

//exemplo 2
console.log('------/exemplo 2/------');
function max(x, y) {
    if(x > y) {
        return x;
        // console.log(`o número maior é o (X): ${x}`);
    }
        return y;
}
console.log(max(10, 2));//maior dos número

//exemplo 3
console.log('------/exemplo 3/------');
function max(x, y) {
    if(x > y) return x;
    return y;
}
console.log(max(10, 2));//maior dos número

//exemplo 4 (refatoração)
console.log('------/exemplo 4/------');
function max(x, y) {
    //se x > y retorne(?) x se não(:) y 
    return x > y ? x : y;
}
console.log(max(10, 20));//maior dos número

//exemplo 5 (errow function (=>))
console.log('------/exemplo 5/------');
const max2 = (x, y)  => x > y ? x : y;
    //se x > y retorne(?) x se não(:) y 
console.log(max2(100, 50));//maior dos número

