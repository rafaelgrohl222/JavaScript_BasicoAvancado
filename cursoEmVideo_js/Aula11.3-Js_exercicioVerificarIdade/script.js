//Exercício Verificador de Idade
function verificar() {
    var data = new Date();
    var ano = data.getFullYear();

    var formularioAno = document.getElementById('txtano');
    var resultado = document.querySelector('div#res');

    //verificar se digitou alguma coisa || vazio
    if(formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamnte!');
    } else {
        var radioSex = document.getElementsByName('radsex');
        var idade = ano - Number(formularioAno.value);
        resultado.innerHTML = `idade calculada ${idade}.`;

        /*---criando foto dinamicamete pelo JS---*/
        var img = document.createElement('img');//criou um elemento TAG img
        img.setAttribute('id', 'foto');//acrecentou o id para foto

        var genero = '';

        if(radioSex[0].checked) {
            genero = 'homem';
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', fotoCrianca.png);
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotoJovem.png');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotoAdulto.png');
            } else {
                //Idoso
                img.setAttribute('src','foto3idade.png');
            }
        } else if (radioSex[1]) {
            genero = 'Mulher';
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', fotoCrianca.png);
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotoJovem.png');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotoAdulto.png');
            } else {
                //Idoso
                img.setAttribute('src','foto3idade.png');
            }
        }
    }
    resultado.style.textAlign = 'left';//alinhamento de css
    resultado.innerHTML = `Detectamos (${genero}) com idade (${idade}).`;
    divRes.appendChild(img);//appendChild = add um elemento abaixo
}


//16min = Exercícios JavaScript (Parte 3) - Curso JavaScript