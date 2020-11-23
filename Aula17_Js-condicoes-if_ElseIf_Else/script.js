/**CONDIÇÕES IF, ELSE IF e ELSE
 * IF = SE
 * ELSE IF = SENÃO SE
 * ELSE = SENÃO 
 */

 console.log('Aplicação: Condições if, else if, else');
const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('Bom Dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite!')
} else {
    console.log('Olá, o formato da hora está errada!');
}