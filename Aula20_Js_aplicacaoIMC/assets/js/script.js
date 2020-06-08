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
    const imc = getImc(peso, altura);

    console.log(imc);
});//escutando o evento 'submit'
function getNivelImc (imc) {
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade grau 2', 'Obesidade Grau 3'];

    if(imc >= 39.9) {
        return nivel[5];
    }else if(imc >= 34.9) {
        return nivel[4];
    }else if(imc >= 29.9) {
        return nivel[3];
    }else if(imc >= 24.9) {
        return nivel[2];
    }else if(imc >= 18.5) {
        return nivel[1];
    }
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

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
//43min