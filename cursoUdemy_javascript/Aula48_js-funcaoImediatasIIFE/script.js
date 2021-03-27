/** IIFE - Immediately Invoked Function Expression
 * Funções Imediatas / Funções Auto Invocadas imediatamente
 */

(function (idade, peso, altura) {//IIFE -> Protege o escopo gglobal

    const sobrenome = 'Freitas';
    function criaNome(nome) {
        //const nome2 = 'Freitas';//pega 2º
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Rafael'));
    }
    falaNome();
    console.log(`Idade: ${idade}, Peso: ${peso} e Altura: ${altura}`);

})(40, 100, 1.79);