/**
 * Função Recursivas (É uma funçao que se chama de volta)
 */
function recursiva(max) {
    if(max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}
recursiva(0);