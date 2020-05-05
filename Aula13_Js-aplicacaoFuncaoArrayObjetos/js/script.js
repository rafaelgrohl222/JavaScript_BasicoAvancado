function meuEscopo () {
    const form = document.querySelector('.form');
    //espião
    form.onsubmit = function (evento) {
        alert('Eviado com "SUCESSO"!');
    };
}
meuEscopo();
//20min