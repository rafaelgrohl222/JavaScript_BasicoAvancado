//Exercício Verificador de Idade
function verificar() {
    var data = new Date();//("July 21, 1983 01:15:00")data atual
    var ano = data.getFullYear();// ano atual.
    
    var formAno = document.getElementById('txtano');//input ano
    var divRes = document.querySelector('div#res');//div resultado

    /*verificar se digitou alguma coisa || vazio*/
    if(formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] - Verifique os dados e (TENTE NOVAMENTE)!');
        } else {
            var radioSex = document.getElementsByName('radsex');//radio tem que ser igual
            var idade = ano - Number(formAno.value);//ano atual - ano digitado
            divRes.innerHTML = `Idade calculada ${idade}.`;

            /*---Add foto dinamicamete pelo JS---*/
            var img = document.createElement('img');//criar tag img
            img.setAttribute('id', 'foto');//criar atributo id p/ foto

            var genero = '';
            /*Verificando qual dos input:radio foi selecionado*/
            //se input:radio na posição 0 estiver selecionada, então
            if(radioSex[0].checked) {
                genero = 'Homem';
                if(idade >= 0 && idade < 10) {
                    //criança
                    img.setAttribute('src','../Aula11.3-Js_exercicioVerificarIdade/fotos/fotoCrianca.png');
                } else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src','../Aula11.3-Js_exercicioVerificarIdade/fotos/fotoJovem.png');
                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src','../Aula11.3-Js_exercicioVerificarIdade/fotos/fotoAdulto.png');
                } else {
                    //Idoso
                    img.setAttribute('src','../Aula11.3-Js_exercicioVerificarIdade/fotos/foto3idade.png');
                }
            } else if (radioSex[1]) {
                genero = 'Mulher';
                if(idade >= 0 && idade < 10) {
                    //criança
                    img.setAttribute('src','../Aula11.3-Js_exercicioVerificarIdade/fotos/fotoCrianca.png');
                } else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src','../Aula11.3-Js_exercicioVerificarIdade/fotos/fotoJovem.png');
                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src','../Aula11.3-Js_exercicioVerificarIdade/fotos/fotoAdulto.png');
                } else {
                    //Idoso
                    img.setAttribute('src','../Aula11.3-Js_exercicioVerificarIdade/fotos/foto3idade.png');
                }
            }
        }
        divRes.style.paddingTop = '5px';
        divRes.style.textAlign = 'center';
        divRes.innerHTML = `Detectamos (${genero}) com idade (${idade}).`;
        divRes.appendChild(img);//appendChild = add um elemento abaixo
}
//14min