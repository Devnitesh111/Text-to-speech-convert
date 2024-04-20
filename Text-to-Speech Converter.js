const convertBtn = document.getElementById('convert-btn');
const stopBtn = document.getElementById('stop-btn');
const textToConvert = document.getElementById('text-to-convert');

let synth = window.speechSynthesis;
let speaking = false;

convertBtn.addEventListener('click', () => {
    if (!speaking) {
        let text = textToConvert.value;
        if (text !== '') {
            let utterance = new SpeechSynthesisUtterance(text);
            synth.speak(utterance);
            speaking = true;
            toggleButtons();
            utterance.onend = () => {
                speaking = false;
                toggleButtons();
            };
        }
    }
});

stopBtn.addEventListener('click', () => {
    if (speaking) {
        synth.cancel();
        speaking = false;
        toggleButtons();
    }
});

function toggleButtons() {
    convertBtn.style.display = speaking ? 'none' : 'block';
    stopBtn.style.display = speaking ? 'block' : 'none';
}
