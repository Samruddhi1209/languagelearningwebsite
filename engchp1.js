const quizData = [
    {
        question: "Manu's father works in",
        a: "Central School",
        b: "Amber Hospital",
        correct: "a",
    },
    {
        question: "Mita is",
        a: "Two years old",
        b: "Ten months old",
        correct: "b",
    },
    {
        question: "Manu's pet is",
        a: "his teddy bear",
        b: "his dog,Spot",
        correct: "b",
    },
    {
        question: "Manu,Mita and Spot go to the park with",
        a: "Grandma",
        b: "Grandpa",
        correct:"b"
    },
    {
        question: "Manu Likes to",
        a: "read books",
        b: "looks at the words and pictures in book",
        correct:"b"
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
  
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

          
           `
       }
    }
})