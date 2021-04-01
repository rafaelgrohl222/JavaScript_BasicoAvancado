/** Praticando com Factory Function
 * CALCULADORA
 */
function criaCalculadora() {
    //objeto
    return {
        //Atributos
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        //Metodos - inicia
        inicia: function(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        //Metodo - pressionaEnter
        pressionaEnter: function() {
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        //Metodo - realizaConta
        realizaConta: function() {
            let conta = this.display.value;

            try {
                conta = eval(conta);//eval, avalia como está e tentar executar
                
                if(!conta) {
                    alert('Conta Invalida');
                    return;
                }
                this.display.value = String(conta);
            } catch(e) {
                alert('Conta Invalida');
                return;
            }
        },

        //Metodos - clearDisplay
        clearDisplay: function() {
            this.display.value = '';
        },

        //Metodo - apagaUm
        apagaUm: function() {
            this.display.value = this.display.value.slice(0, -1);//slice, tamanho da string -1
        },

        //Metodos - cliqueBotoes
        cliqueBotoes: function() {
            //this -. calculadora
            //pega todos click no evento
            document.addEventListener('click', (e) => {//arrow function
                const el = e.target;//target, o que estou clicando

                //evento da classe q/ está no container 'btn-num' faça
                //btn-num
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);//bind, usando
                }
                //btn-clear
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                //btn-del
                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                //btn-eq
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay: function(valor) {
            this.display.value += valor;
        },

    };
}
const calculadora = criaCalculadora();
calculadora.inicia();

//30min