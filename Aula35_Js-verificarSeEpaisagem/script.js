//Escreva uma função chamada ePaisagem que
//Receba 2 argumento, largura, altura. De uma imagem (number).
//Retorne true se a se a imagem extiver no modo paisagem

//------função tradicional------
// function ePaisagem (largura, altura) {
//     // return largura > altura ? true : false;
//     return largura > altura;
// }
// console.log(ePaisagem(1920, 1080));

//errow function
const ePaisagem = (largura, altura) => largura > altura;

console.log(`Imagem: ${ePaisagem(1920, 1080)}`);