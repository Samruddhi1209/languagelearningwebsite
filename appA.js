const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log("Speech Recognition started!");
};

recognition.onresult = function(event) {
    console.log(event);

    const spokenWords = event.results[0][0].transcript;
    console.log("Spoken words are", spokenWords);
};

function computerSpeech(words) {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.pitch = 1.5;
    speech.volume = 0.8;
    speech.rate = 1;

    determineWords(speech, words);

    window.speechSynthesis.speak(speech);
}

function determineWords(speech, words) {
    if (words.includes("A")) {
        speech.text = 'Hello, I am your robot friend.Say A for Apple';
    } 
    if (words.includes("Apple")) {
        speech.text = 'A for Ant';
    } 

}

// Automatically start speech recognition and make the robot talk when the page loads
window.addEventListener("load", function() {
    recognition.start();
    computerSpeech('Hello, I am your robot friend.'); // Initial robot speech
});
