/*script - Contar*/

function contar() {
    var txtFormInicio = document.querySelector('input#txtinicio');
    var txtFormFim = document.querySelector('input#txtfim');
    var txtFormPasso = document.querySelector('input#txtpasso');
    var resultado = document.querySelector('div#res');

    if (txtFormInicio.value.length == 0 || txtFormFim.value.length == 0 || txtFormPasso.value.length == 0) {
        resultado.innerHTML = '[ERRO] Falta Dados!';
        resultado.style.background = 'red';
        resultado.style.borderRadius = '10px';
    } else {
        var formInicio = Number(txtFormInicio.value);
        var formFim = Number(txtFormFim.value);
        var formPasso = Number(txtFormPasso.value);

        resultado.innerHTML = 'Enviado com (SUCESSO)';
        resultado.style.background = 'green';
        resultado.style.borderRadius = '10px';
    }

}