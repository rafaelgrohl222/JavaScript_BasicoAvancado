function meuEscopo () {
    const form = document.querySelector('.form');
    
    function recebeEventoForm (evento) {
        evento.preventDefault();//previne contra envio de formulário

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        console.log("Nome:", nome.value,"Sobrenome:", sobrenome.value,"Peso:", peso.value,"Altura:", altura.value);
    }
    //adiciona um escutador de evento no formulário
    form.addEventListener('submit', recebeEventoForm);
}//Fim meuEscopo
meuEscopo();
//28min