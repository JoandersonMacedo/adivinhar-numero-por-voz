const elementoChute = document.querySelector('#chute')

window.SpeechRecognition =
    window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(evento) {
    chute = evento.results[0][0].transcript;
    console.log(chute);
    exibeChute(chute);
    validaChute(chute);
}

function exibeChute(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `;
}

// recognition.addEventListener('end', () => recognition.start());