//selecionado por ID
/*
var p1 = window.document.getElementsByTagName('p')[0];//selecionando primeira tag p
window.document.write(p1.innerHTML);//copiando o que esta escrito na tag p
p1.style.color = 'blue';
var d = window.document.getElementById('msg');//selecionado via id
d.style.background = 'green';//adicionando cor na div selecionada
//divId.innerText = 'Estou aguardando...';//alterando o escrito da div
*/

//selecionando por SELETOR
var corpo = window.document.body
var p1 = window.document.getElementsByTagName('p')[1];

var d = window.document.querySelector('div#msg');
d.style.background = 'green';
//11min aula 09