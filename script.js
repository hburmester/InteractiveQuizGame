const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'London', 'Madrid'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
    },
    {
        question: 'What is the largest mammal on Earth?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        correctAnswer: 'Blue Whale'
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const resultElement = document.getElementById('result');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];

    questionElement.textContent = currentQuizData.question;
    optionsContainer.innerHTML = '';

    currentQuizData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
}

function selectOption(selectedIndex) {
    const currentQuizData = quizData[currentQuestion];

    if (currentQuizData.options[selectedIndex] === currentQuizData.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = '';
    optionsContainer.innerHTML = '';
    resultElement.textContent = `You scored ${score} out of ${quizData.length}!`;
    resultElement.style.color = score === quizData.length ? 'green' : 'red';
}

function checkAnswer() {
    const selectedOption = document.querySelector('.option.selected');

    if (selectedOption) {
        const selectedIndex = Array.from(optionsContainer.children).indexOf(selectedOption);
        selectOption(selectedIndex);
        selectedOption.classList.remove('selected');
    } else {
        alert('Please select an option before submitting.');
    }
}

loadQuestion();
