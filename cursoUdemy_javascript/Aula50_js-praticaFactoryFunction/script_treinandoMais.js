/** Calculadora
 * Factory Function
 */
function criaCalculadora() {
    //objeto
    return {
        display: document.querySelector('.display'),//input text

        //Metodo - inicia
        inicia: function() {
            this.cliqueBotoes();//chamar cliqueBotoes
            this.pressionaEnter();//chamar realizaConta
        },

        //Metodo - pressionaEnter
        pressionaEnter: function() {
            //keyup, quando soltar a tecla realiza a conta
            this.display.addEventListener('keyup', (e) => {//usar arrow function para não perder o this
                //keyCode = 13, é o (enter)
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        //Metodo - realizaConta
        realizaConta: function() {
            let conta = this.display.value;

            try {
                conta = eval(conta);// o que existe dentro do display vai tentar realizar

                if(!conta) {
                    alert('Conta Invalida!');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta Invalida!');
                return;
            }
        },

        //Metodo - clearDisplay
        clearDisplay: function() {
            this.display.value = '';
        },

        //Metodo - apagaUm
        apagaUm: function() {
            this.display.value = this.display.value.slice(0, -1);//slice, tamanho da string -1
        },

        //Metodo cliqueBotoes
        //this -> calculadora
        cliqueBotoes: function() {
            //Arrow functions => mantem o this, não altera
            document.addEventListener('click', (e) => {
                const el = e.target;//oque estou clicando

                if(el.classList.contains('btn-num')) {//se o elemento 'el' possui essa class 'btn-num' na section
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });//.bind(this) usa o meu this, que écalculadora
        },

        //Metodo - btnParaDisplay
        btnParaDisplay: function(valor) {
            this.display.value += valor;
        }
    };
}
const Calculadora = criaCalculadora();
Calculadora.inicia();

//30min