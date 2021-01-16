const form = document.querySelector('#formulario');//capituru o formulário o form
//addEventListener, e escutador se foi enviado submit, o evento é representado: e, event
form.addEventListener('submit', function (e) {
    e.preventDefault();//prevenção para não envio do submit
    //e = evento, target = de qual elemento foi clicado na pagina
    const inputPeso = e.target.querySelector('#peso');//capiturou o input
    const inputAltura = e.target.querySelector('#altura');//capiturou o input

    const peso = Number(inputPeso.value);//input.value: valor do input e converção p/ Number
    const altura = Number(inputAltura.value);//input.value: valor do input e converção p/ Number

    //!peso: negação do resultado, false
    //if caso algum resultado diferente de verdadeiro 
    if (!peso) {
        setResultado('Peso invalido!', false);//flag false p/ a classe
        return;
    }
    //!peso: negação do resultado, false
    if (!altura) {
        setResultado('Altura invalida!', false);//flag false p/ a classe
        return;
    }
    const imc = getImc(peso, altura);//função calcular o imc, passar função e imprimir
    const nivelImc = getNivelImc(imc);//pegou o nivel do imc, passar função e imprimir

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);//logando funções, true p/ colocar flag verdadeira
});//escutando o evento 'submit'

function getNivelImc(imc) {
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade grau 2', 'Obesidade Grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}
//Calculando o IMC
function getImc(peso, altura) {
    const imc = peso / altura ** 2; //peso / altura²
    return imc.toFixed(2);//.toFixed: 2 casas decimais
}

//função cria paragrafo
function criaP() {
    const p = document.createElement('p');//criando um paragrafo
    return p;
}

//Função Seta resultado e imprimi paragrafo na tela
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');//selecionando o resultado
    resultado.innerHTML = '';//zerando o HTML
    //isValide = se essa função for valida(verde ou vermelho)
    //recebe 1 mensagem e se ela
    const p = criaP();//Cria o paragrafo
    // verifica se a flag foi enviada (verdadeira ou falsa) 
    if (isValid) {
        p.classList.add('paragrafo-resultado');//Fundo Verde (Verdadeiro)
    } else {
        p.classList.add('bad');//Fundo vermelho(Falso)
    }
    p.innerHTML = msg;//Seta c/ a mensagem enviada
    resultado.appendChild(p);//criação de um elemento no paragrafo
}
//53min