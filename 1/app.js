alert('Boas vindas ao jogo do número secreto');
// Oi gente
// Fazendo novo teste
let numeroMaximo = 120
let numeroSecreto = parseInt(Math.random()*numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
   chute = prompt(`Escolha o número entre 1 e ${numeroMaximo}`);
   if (numeroSecreto == chute) {
    break
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
} 
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);