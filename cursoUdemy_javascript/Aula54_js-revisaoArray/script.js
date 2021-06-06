/**
 * Revisão de Array
 */
/*
const nomes = ['Eduardo', 'Maria', 'Joana'];
//nomes[2] = 'João';//substituiu indice 2
//delete nomes[2];//deletou indice 2
const novo = [...nomes];//copia

const removidoUltimo = novo.pop();//.pop() remove o ultimo indice
novo.push('João');//adiciona no final
const removeInicio = novo.shift();
novo.unshift('Rafael');//adiciona no início

console.log(`Qts array: ${nomes.length}`);//quantidade dentro do array
console.log(`Nomes: ${nomes}`);
console.log(`Novo: ${novo}`);
console.log(`Removido Ultimo: ${removidoUltimo}`);
console.log(`Remove início: ${removeInicio}`);
*/
//                           <- vai da esquerda p/ direita <-
//                 0         1        2         3          4
const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
//const novo = nomes.slice(1,3);//fatiar o array (indice 1 ao 2)
const novo = nomes.slice(1,-1);

/*Transforma1 string em array*/
const nomeUsuario = 'Luiz Otávio Miranda';
const nomeUsuarioArray = nomeUsuario.split(' ');

/*Transforma1 array em string*/
console.log('<---Array convertido  em string--->');
const nomes2 = [ 'Luiz', 'Otávio', 'Miranda' ];
const novo2 = nomes2.join(' ');

console.log(novo2);

console.log('');//espaço

console.log('<---string convertido em Array--->');
console.log(nomeUsuarioArray);

console.log('');//espaço

console.log('<---Array--->');
console.log(nomes);//exibe completo array
console.log(novo);//exibe o fatiado(de 1 ao -1)
//13min