alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    //se chute ofr igual ao número secreto
    if(chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentarivas`);
    } else {
         if(chute > numeroSecreto) {
             alert(`O número secreto é menor que o ${chute}`);
         } else {
            alert(`O número secreto é maior que o ${chute}`);
         }
         //tentativas = tentativas = 1
         tentativas++;
    }

}
