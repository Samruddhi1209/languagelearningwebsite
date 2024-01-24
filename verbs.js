
// script.js

function playAudio(audioFile) {
    const audioElement = document.getElementById('audio');
    const sourceElement = audioElement.querySelector('source');
    sourceElement.src = audioFile;
    audioElement.load();
    audioElement.play();
}

function checkAnswers() {
    const blanks = document.querySelectorAll('.blank');
    const answers = ["screamed", "watched", "filled","picked","brushed","travelled"]; // Change these to the correct answers
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = ''; // Clear previous feedback

    let allCorrect = true;

    blanks.forEach((blank, index) => {
        const userInput = blank.textContent.trim().toLowerCase();
        const correctAnswer = answers[index].toLowerCase();

        const p = document.createElement('p');
        if (userInput === correctAnswer) {
            p.textContent = `Question ${index + 1}: Correct! The answer is ${correctAnswer}.`;
            p.classList.add('correct');
        } else {
            p.textContent = `Question ${index + 1}: Incorrect. Try again.`;
            p.classList.add('incorrect');
            allCorrect = false;
        }

        feedback.appendChild(p);
    });

    if (allCorrect) {
        feedback.innerHTML += "<p>All answers are correct!</p>";
    }
}
