//Condições simples / imprimindo no HTML
// var num = 5;
// if(num === 5){//condiao simples
//     document.getElementById('res');
//     res.innerHTML = `E igual a 5: (${Number(num)})`;
// }else{//condicao composta
//      num += 2;
//      document.getElementById('res');
//      res.innerHTML = `Nao e igual a 5: (${Number(num)})`;
// }

function calcular() {
    var txtv = document.querySelector('input#txtvel');

    var res = document.querySelector('div#res');
    
    var vel = Number(txtv.value);
    
    res.innerHTML = `<p>Sua velocidade e de: <strong>${vel}Km/h</strong></p>`;
    if(vel > 60) {//if simples
        res.innerHTML += `<p>Você esta <strong>MULTADO</strong> por excesso de velocidade!</p>`;
    }
    res.innerHTML += `<p>Dirija sempre co cinto de segurança!</p>`;
}
//18min