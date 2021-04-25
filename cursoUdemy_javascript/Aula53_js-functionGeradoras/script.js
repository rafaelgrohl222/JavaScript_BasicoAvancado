/**
 * Funções Geradoras
 */

//Geradora 1
console.log('----geradora-1----');
function* geradora1() {
    // Codigo qualquer
        yield 'Valor 1';
    // Codigo qualquer
        yield 'Valor 2';
    // Codigo qualquer
        yield 'Valor 3';
}
const g1 = geradora1();
console.log(g1.next().value);//Valor 1
console.log(g1.next().value);//Valor 2
console.log(g1.next().value);//Valor 3
console.log(g1.next().value);//undefined
console.log(g1.next());//{ value: undefined, done: true }

//Geradora 2
console.log('----geradora-2----');
function* geradora2() {
    let i = 0;
    while(true) {
        yield 1;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next().value);

//Geradora 3
console.log('----geradora-3----');
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

//Geradora 4
console.log('----geradora-4----');
function* geradora4() {
    yield* geradora3();//colocar "*"asterisco
    yield 3;
    yield 4;
    yield 5;
}
const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}

//Geradora 5
console.log('----geradora-5----');
function* geradora5() {
    yield function() {
        console.log('vim do "yield 1"');
    };

    // ...

    yield function() {
        console.log('vim do "yield 2"');
    }
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();