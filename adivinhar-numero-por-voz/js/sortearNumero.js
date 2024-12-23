const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    let numeroAleatorio = Math.round(Math.random() * maiorValor);
    while (numeroAleatorio < menorValor) {
        numeroAleatorio = Math.round(Math.random() * maiorValor);
    }
    return numeroAleatorio;
}

console.log(numeroSecreto);

const elementoMenorValor = document.querySelector('#menor-valor');
const elementoMaiorValor = document.querySelector('#maior-valor');

elementoMaiorValor.textContent = maiorValor;
elementoMenorValor.textContent = menorValor;