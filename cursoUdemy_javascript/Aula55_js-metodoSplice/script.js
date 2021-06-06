/**
 * Metodo Slice
 */
//indices -      -5       -4       -3        -2        -1
//indices +       0        1        2         3         4
const nomes = ['Maria', 'João', 'Eduardo','Gabriel', 'Júlia'];

//nomes.slice(0,);//começar a mexer no parametro (indice, delete, elem1, elem2, elem3);
//pop


//remover do indice 3, 1 elemento e incluir no lugar 1 nome
console.log('<---remove indice 3, 1 elemento e incluir 1 no lugar');
const removidosNovo = nomes.splice(3, 1, 'Luiz');
console.log('Removidos novo:', nomes, removidosNovo);

/*
console.log('');//espaço
console.log('<---remove do indice 3, 1 elemento--->')
//remover do indice inicia do 3 só 2 elemento.
const removidos = nomes.splice(3, 2);
console.log('Removidos:', nomes, removidos);
*/

//9min