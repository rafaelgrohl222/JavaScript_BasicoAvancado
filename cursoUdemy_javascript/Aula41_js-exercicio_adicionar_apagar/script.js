const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const ulTarefa = document.querySelector('.ul-tarefas');

//função criar li
function criaLi() {
    const li = document.createElement('li');//cria elemento (li)
    return li;
}
//função anonima, identificar quando a telha foi clicada
inputTarefa.addEventListener('keypress', function(e){//addEventListener - escutando quando clica
    //keyCode = 13, é o enter clicado
    if(e.keyCode === 13) {//código da tecla: keyCode 13(enter)
        if(!inputTarefa.value) return;//(!negação de valor)não envia valor (vazio) no formulário
        criaTarefa(inputTarefa.value);//solicitando a função (criarTarefa) realizar o serviço
    }
});
//função limpar input
 function limpaInput () {
     inputTarefa.value = '';//limpa imput
     inputTarefa.focus();//coloca o cursor
 }
//função cria botão apagar
 function criaBotaoApagar(li) {//passar o li, onde irá criar
    li.innerText += ' ';//espaço p/ botão
    const botaoApagar = document.createElement('button');//criando elemento botão
    botaoApagar.innerText = 'apagar';//texto do botão
    //botaoApagar.classList.add('apagar');//add classe de nome 'apagar' no botão
    botaoApagar.setAttribute('class', 'apagar');//setar/colocar um atributo 'classe' de nome 'apagar'
    botaoApagar.setAttribute('title', 'Apagar essa Tarefa!')//setar/colocar um atributo 'title' informação 'Pagar tarefa'
    li.appendChild(botaoApagar);//adicionar o bottão no li
 }
//função principal
function criaTarefa(textoInput) {
    const li = criaLi();//chama função cria li
    li.innerText = textoInput;//mostrar no navegador
    ulTarefa.appendChild(li);//add evento na ul
    /*ESTILO CSS*/
    ulTarefa.style.background = 'rgb(160, 160, 243)';//cor background
    ulTarefa.style.listStyle = 'none';//li oculto
    ulTarefa.style.borderRadius = '10px';//borda arredondada
    limpaInput();//chama função limpa input
    criaBotaoApagar(li);//chama função cria botão apagar
    salvarTarefas();//função salvar tarefa
}
//função anonima, que pega o texto
btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;//(!negação de valor)não envia valor (vazio) no formulário
    criaTarefa(inputTarefa.value);//solicitando a função (criarTarefa) realizar o serviço
});
//função anonima, APAGAR
//pegar o click do botão
document.addEventListener('click', function(e) {
    const el = e.target;//target: local clicado
    //console.log(el);//teste, onde vai informar onde está sendo clicado

    if(el.classList.contains('apagar')) {//se esse botão contem a classe 'apagar'
        //console.log(el);//teste, se o botão foi clicado
        el.parentElement.remove();//do meu elemento o pai dele será removido
        //console.log(el.parentElement);//teste, ao clicar vou ver quem é o pai dele para excluir
        salvarTarefas();//função salvar tarefa
    }
});
//funçao salvar tarefa
function salvarTarefas () {
    //pegando todas (li) que estão na const (ulTarefa)
    const liTarefas = ulTarefa.querySelectorAll('li')
    const listaDeTarfas = [];//array vazia

    for(tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar', '').trim();//subistituir texto apagar p/ vazio. trim() tira espaço
        listaDeTarfas.push(tarefaTexto);//colocar os textos dentro do array
    }
    const tarefaJSON = JSON.stringify(listaDeTarfas);//criado lista string convertido em JSON do array(listaDeTarfas)
    //localStorage: mini base de dados no navegador
    localStorage.setItem('tarefa', tarefaJSON);//setItem(tarefa): nome do arquivo p/ recuperação, valor (tarefaJSON)
}
//Funçao adicina tarefas salvas
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefa');//obiter os itens (salvas no BD=banco de dados)
    const listaDeTarfas = JSON.parse(tarefas);//converter as tarefas p/ array
    console.log(listaDeTarfas);

    for(let tarefa of listaDeTarfas){
        criaTarefa(tarefa);//criando tarefas do BD
    }
}
adicionaTarefasSalvas();
//39min

