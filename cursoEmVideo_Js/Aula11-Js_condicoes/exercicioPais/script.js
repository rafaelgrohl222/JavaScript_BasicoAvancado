var txtP = document.querySelector('input#txtpais');
var res = document.querySelector('div#res');

var pais = txtP.value;

function verificar() {
    if(pais !== 'brasileiro') {
        res.innerHTML = `<p>Voce e Estrangeiro</p>`;
    }else{
        res.innerHTML = `<p>Voce e Brasileiro</p>`;
    }
}