let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarBotao1() {
    console.log('O botão foi clicado');
}

function verificarBotao2() {
    alert ('Eu amo JS');
}

function verificarBotao3() {
    let resposta
    resposta = prompt ('Escolha o nome de uma cidade do Brasil');
    alert (`Estive em ${resposta} e lembrei de você`);
}

function verificarBotao4() {
    let primeiroNumero = parseInt(prompt ('Escolha o primeiro número'));
    let segundoNumero = parseInt(prompt ('Escolha o segundo número'));
    let resultado = primeiroNumero + segundoNumero
    alert(`${primeiroNumero}+${segundoNumero} = ${resultado}`);
}