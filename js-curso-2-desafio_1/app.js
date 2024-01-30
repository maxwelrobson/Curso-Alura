let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';


function verificarAperto() {
    console.log('O botão foi clicado');
}

function mensagemAlerta() {
    alert('Eu amo JS');

}

function cliquePrompt() {
    let nomeDaCidade = prompt('Qual o nome da sua cidade?');
    alert(`Estive em ${nomeDaCidade} e lembrei de você.`);
}

function soma() {
    let numero1 = prompt('Digite o primeiro número:')
    let numero2 = prompt('Digite o segundo número:')
    let resultado = parseInt(numero1) + parseInt(numero2);
    alert(`O resultado da soma é: ${resultado}`)
}