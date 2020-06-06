const form = document.querySelector('#formulario');//selecionando o form
//evento pode ser representado: e, event
//parar o envio: addEventListener, e assistir se foi enviado submit
form.addEventListener('submit', function (e) {
    e.preventDefault();//prevenção de não envio do submit
    const inputPeso = e.target.querySelector('#peso');//selecionando o input
    const inputAltura = e.target.querySelector('#altura');//selecionando o input

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    //negando o resultado
    if(!peso){
        setResultado('Peso invalido!', false);
        return;
    }
    if(!altura){
        setResultado('Altura invalida!', false);
        return;
    }
    console.log('Cheguei aqui!');
});//escutando o evento 'submit'

//função cria paragrafo
function criaP () {
    const p = document.createElement('p');//criando um paragrafo
    return p;
}

//Função imprimi paragrafo na tela
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');//selecionando o resultado
    resultado.innerHTML = '';//zerando o HTML

    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}
//35min