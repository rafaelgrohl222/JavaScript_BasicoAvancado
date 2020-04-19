//Converção -> Number(prompt('Digite um número:'));
const numero = Number(prompt('Digite um número:'));
/* 2º Opção
  * numero = Number(numero);
  * getElementById = selecionar o elemento pelo ID
*/
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML += numero;

texto.innerHTML = '';//limpa texto
texto.innerHtml += `<p>Rais Quadrada: "${numero ** 0.5}".</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>Seu número "${numero}" + 2 é: ${numero + 2}.</p>`;
texto.innerHTML += `<p>Arredondamento para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Aredondamento para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Arredondamento 2 casas decimais: ${numero.toFixed(2)}</p>`;
