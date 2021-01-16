//Projeto: Exercício som For
const elementos = [
    {tag: 'p', texto: 'Qualquer coisa.'},
    {tag: 'div', texto: 'Frase 2.'},
    {tag: 'section', Texto: 'Frase 3.'},
    {tag: 'footer', texto: 'Frase 4.'},
];
const container = document.querySelector('.container');//selacionando classe
const div = document.createElement('div');//criando elemento "div"

//length = informa quantidade de indice
for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];//desestruturação, pegar a tag, texto e o indice
    let tagCriada = document.createElement(tag);//criar os elementos tag
    //tagCriada.innerHTML = texto;//ão existe HTML
    tagCriada.innerText = texto;//imprimir o texto existente
    div.appendChild(tagCriada);//adicionar as tags dentro da div
}
container.appendChild(div);//adicionar as tags container
//4min30