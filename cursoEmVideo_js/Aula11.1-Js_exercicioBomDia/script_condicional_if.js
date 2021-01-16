/*Projeto Voto*/
// var idade = 66;

// if (idade < 16) {
//     console.log('NAO VOTA!');
// } else if (idade < 18 || idade > 65) {
//         console.log('VOTO OPCIONAL!');
// } else {
//     console.log('VOTO OBRIGATORIO');
// }

// console.log('');//espaco
function carregar() {
    var msg = document.getElementById('msg');//div mensagem
    var img = document.getElementById('imagem');//div imagem
    var data = new Date();//data atual
    var hora = data.getHours();//hora atual
    
    /*inativo
    var hora = 20;
    msg.innerHTML = `Agora são ${hora}hrs.`;
    */ 

    if (hora >= 0 && hora < 12) {
        // Bom Dia
        img.src = 'manha.png';
        document.body.style.background = '#bcd4de';
        msg.innerHTML = `Agora são ${hora}hrs, bom dia...`;
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'tarde.png';
        document.body.style.background = '#ffc51f';
        msg.innerHTML = `Agora são ${hora}hrs, boa tarde...`;
    } else {
        //Boa Noite
        img.src = 'noite.png';
        document.body.style.background = '#1d0e0a';
        msg.innerHTML = `Agora são ${hora}hrs, boa noite...`;
    }
}

//15min