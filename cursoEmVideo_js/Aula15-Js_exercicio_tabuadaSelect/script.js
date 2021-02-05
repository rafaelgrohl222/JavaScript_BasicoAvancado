function tabuada () {
    let num = document.getElementById('txtnum');//input:number
    let tab = document.getElementById('seltab');//select tabuada
    let resultado = document.getElementById('res');//div res

    if (num.value.length == 0) {
        resultado.innerHTML = `[ERROR] Insire um valor, por favor!`;
        resultado.style.background = 'red';
        resultado.style.borderRadius = '15px';
        //window.alert('Insire um valor, por favor!');
    } else {
        let numero = Number(num.value);
        let c = 1;//variavel contador(inicializada c/ 1)
        tab.innerHTML = '';//Limpar select
        while (c <= 10) {
            let item = document.createElement('option');//criando elementos
            item.text = `${numero} X ${c} = ${numero*c}`;//item.text parte dentro option
            item.value = `tab${c}`;//item selecionado
            tab.appendChild(item);//add elemento filho
            c++;//incrementa o valor de c
        }
        resultado.innerHTML = `Gerado com (SUCESSO)`;
        resultado.style.background = 'Green';
        resultado.style.borderRadius = '15px';
    }

}
//12min - concluiu
//Exercícios JavaScript (Parte 6) - Curso JavaScript
