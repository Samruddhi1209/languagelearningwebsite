
// script.js

function playAudio(audioFile) {
    const audioElement = document.getElementById('audio');
    const sourceElement = audioElement.querySelector('source');
    sourceElement.src = audioFile;
    audioElement.load();
    audioElement.play();
}
