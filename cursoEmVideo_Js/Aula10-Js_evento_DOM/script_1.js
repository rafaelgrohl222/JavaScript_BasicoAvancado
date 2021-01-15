    /*onmouseenter - encostar mouse dentro da div*/
    /*onmouseout - sair mouse p/ fora da div*/
    /*onmousemove - move mouse na div*/
    /*onmousedown - click mouse na div*/
    /*mouseup - sair mouse da div*/
    /*click - click mouse na div e solta*/

    var area = document.getElementById('area');

    area.addEventListener('click', clicar);
    area.addEventListener('mouseenter', entrar);
    area.addEventListener('mouseout',sair);

    //ao clicar
    function clicar() {
        area.innerText = 'Clicou...';
        area.style.background = 'red';
    }
    //ao entrar
    function entrar() {
        area.innerText = 'Entrou...';
    }
    //ao sair
    function sair() {
        area.innerText = 'Saiu...';
        area.style.background = 'green';
    }
