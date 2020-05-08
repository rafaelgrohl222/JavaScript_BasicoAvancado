function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    
    function recebeEventoForm (evento) {
        evento.preventDefault();//previne contra envio de formulário

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //add 1 objetos p/ cada array pessoas
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>Nome: ${nome.value}, Sobrenome: ${sobrenome.value},` +
        ` Peso: ${peso.value}Kg, Altura: ${altura.value}.</p>`
    }
    //adiciona um escutador de evento no formulário
    form.addEventListener('submit', recebeEventoForm);
}//Fim meuEscopo
meuEscopo();
//28min