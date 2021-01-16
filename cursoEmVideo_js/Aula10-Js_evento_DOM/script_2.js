 function somar() {
     var tn1 = document.getElementById('txtn1');
     var tn2 = document.querySelector('input#txtn2');
     var res = document.getElementById('res');

     var numSoma1 = Number(tn1.value);
     var numSoma2 = Number(tn2.value);
     var soma = numSoma1 + numSoma2;
     res.innerHTML = `A soma entre ${numSoma1} e ${numSoma2} é: <strong>(${soma})</strong>`;
 }

 function subtrair() {
     var tn3 = document.getElementById('txtn3');
     var tn4 = document.querySelector('input#txtn4');
     var resSubt = document.getElementById('resSubtra');

     var numSubtr1 = Number(tn3.value);
     var numSubtr2 = Number(tn4.value);
     var subtrai = numSubtr1 - numSubtr2;
     resSubt.innerHTML = `A subtração entre ${numSubtr1} e ${numSubtr2} e: <strong>(${subtrai})</strong>`;
 }