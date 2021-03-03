//try, catch, throw, finally
function somar (num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new TypeError('[ERROR] Precisa ser (NÚMERO)');
    } else {
        return num1 + num2;
    }
}
try {
    let res = (somar('5',8));
    console.log('Resultado:',res);
} catch (err){
    console.log(err);
} finally {
    console.log('[finally] Dados enviado (Não é Número)');
}