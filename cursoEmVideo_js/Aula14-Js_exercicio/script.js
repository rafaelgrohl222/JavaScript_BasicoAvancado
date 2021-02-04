/*Exercícios JavaScript (Parte 5) - Curso JavaScript
* 16min
*/
function contar () {
    var txtFormInicio = document.querySelector('input#txtinicio');
    var txtFormFim = document.getElementById('txtfim');
    var txtFormPasso = document.getElementById('txtpasso');
    var resultado = document.querySelector('div#res');

    if (txtFormInicio.value.length == 0 || txtFormFim.value.length == 0 || txtFormPasso.value.length == 0){
        resultado.innerHTML = `Impossivel Contar!`;
        //window.alert('[ERROR] Falta dados!');
    } else{
        resultado.innerHTML = `Contando: <br>`;//<br> quebra a linha do contando
        let formInicio = Number(txtFormInicio.value);
        let formFim = Number(txtFormFim.value);
        let formPasso = Number(txtFormPasso.value);

        if( formPasso <= 0) {
            window.alert('Passo Inválido! Considerar Passo 1');
            formPasso = 1;
        }

        if (formInicio < formFim) {
            //Contagem crescente
            for(let contar = formInicio; contar <= formFim; contar += formPasso){
                resultado.innerHTML += ` (${contar}) \u{1F449} `;
            }
        } else {
            //Contagem regressiva
            for (contar = formInicio; contar >= formFim; contar -= formPasso) {
                resultado.innerHTML += `(${contar}) \u{1F449} `;
            }
        }
        resultado.innerHTML += `\u{1F3C1}`;
    }
}
