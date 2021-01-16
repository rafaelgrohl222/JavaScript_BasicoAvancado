/*Projeto Voto*/
var idade = 66;

if (idade < 16) {
    console.log('NAO VOTA!');
} else if (idade < 18 || idade > 65) {
        console.log('VOTO OPCIONAL!');
} else {
    console.log('VOTO OBRIGATORIO');
}

console.log('');//espaco

/*Projeto Horas*/
var agora = new Date();
var horas = agora.getHours();

console.log(`Agora sao exatamente ${horas} horas`);
if (horas < 12) {
    console.log('Bom Dia!', horas);
}else if (horas < 18){
    console.log('Boa Tarde!', horas);
}else {
    console.log('Boa Noite!', horas);
}
//10min