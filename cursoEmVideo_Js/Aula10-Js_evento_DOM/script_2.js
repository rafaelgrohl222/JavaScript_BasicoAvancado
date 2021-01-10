 function somar() {
     var tn1 = document.getElementById('txtn1');
     var tn2 = document.querySelector('input#txtn2');
     var res = document.getElementById('res');

     var num1 = Number(tn1.value);
     var num2 = Number(tn2.value);
     var soma = num1 + num2;
     res.innerHTML = `A soma entre ${num1} e ${num2} é: <strong>(${soma})</strong>`;

 }

 //26min