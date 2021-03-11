//escopo lexico
/*
const nome = 'Luiz';//não usou, porque achou dentro da função falaNome

function falaNome() {
    const nome = 'Otávio';//usa primeiro
    console.log('Usa: ', nome);
}
*/
function falaNome() {
    console.log('Usa: ', nome);
}

//função que usa a função falaNome
function usaFalaNome() {
    const nome = 'Otávio';//não usou, porque ela procura primeiro onde foi criada e vizinhança
    falaNome();//usando a função falaNome
}
usaFalaNome();