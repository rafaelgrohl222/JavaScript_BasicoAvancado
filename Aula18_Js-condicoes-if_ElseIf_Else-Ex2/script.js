/**CONDIÇÕES IF, ELSE IF, ELSE + OPÇÕES
 * IF
 * ELSE IF
 * ELSE
 * O IF QUANDO ENCONTRA UMA VERDADE ELE IMPRIME ELA, 
 * MAS SE EXISTIR OUTRA VERDADE NÃO VERIFICA E NÃO IMPRIME.
 */
console.log('ALICAÇÃO 2: CONDIÇÕES IF, ELSE IF, ELSE + OPÇÕES');

const numero = 5;
if (1 === 1) {
    console.log('***LITERAL***, VERIFICA UMA VERDADE ESQUECE AS OUTRAS VERDADE')
}else if (numero >= 0 && numero <= 5) {
    console.log('Este número está entre 0 e 5!');
} else if (numero >= 6 && numero <= 10) {
    console.log('Este número está entre 6 e 10!');
} else {
    console.log('Este número NÃO está entre 0 e 5 e 6 e 10!');
}
//13min