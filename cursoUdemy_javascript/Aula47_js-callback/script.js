/**
 * Callback - funcões quando uma ação é executada
 */

//Função aleatório
function rand(min = 1000, max= 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
console.log(rand());

function f1(Callback) {
    setTimeout(function() {
    console.log('F1'); 
    if(Callback) Callback();       
    }, rand());
}
function f2(Callback) {
    setTimeout(function() {
        console.log('F2');
        if(Callback) Callback();
        }, rand());
}

function f3(Callback) {
    setTimeout(function() {
        console.log('F3');
        if(Callback) Callback();
        }, rand());
}
/*--callback hell--Boneca Russa
f1(function() {
    f2(function() {
        f3(function() {
            console.log('Bom Dia!');            
        });
    });
});
*/
f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Ola mundo!');
}
