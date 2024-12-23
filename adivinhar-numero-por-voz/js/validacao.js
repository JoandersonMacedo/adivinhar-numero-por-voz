function validaChute(chute) {
    const numero = +chute;

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += `
            <div>Valor inválido</div> 
        `;
        return;
    }
    if (numero > maiorValor || numero < menorValor) {
        elementoChute.innerHTML += `
            <div>Valor inválido: o número presisa estar entre ${menorValor} e ${maiorValor}</div> 
        `;
        return;
    }

    if (numeroSecreto === numero) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        return;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
        return;
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-nnovamente') {
        window.location.reload();
    }
})