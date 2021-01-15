function verificar() {

    var txtP = document.querySelector('input#txtpais');

    var resP = document.querySelector('div#respais');

    var pais = txtP.value;

        resP.innerHTML = `idade informada: ${pais}`;

    if(pais != 'brasil') {//if simples
            resP.innerHTML = `<p>Voce e ESTRANGEIRO!</p>`;
        }else{//if composto
            resP.innerHTML = `<p>Voce e BRASILEIRO!</p>`;
    }
}