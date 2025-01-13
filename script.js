
const levels = [
    {
        topic: "Biomechanics Basics",
        question: "Calculate the force exerted on a knee joint during walking.",
        options: ["300N", "500N", "700N", "900N"],
        answer: "700N"
    },
    {
        topic: "Medical Imaging Basics",
        question: "Choose the optimal magnetic field strength for an MRI scan.",
        options: ["0.5 Tesla", "1.5 Tesla", "3 Tesla", "5 Tesla"],
        answer: "3 Tesla"
    },
    {
        topic: "Prosthetic Design",
        question: "Select the best material for a lightweight prosthetic limb.",
        options: ["Steel", "Titanium", "Plastic", "Carbon Fiber"],
        answer: "Carbon Fiber"
    }
    // Add more levels as needed...
];

let currentLevel = 0;

function displayLevel(levelIndex) {
    const level = levels[levelIndex];
    document.getElementById('question').innerHTML = `Level ${levelIndex + 1}: ${level.topic}<br><br>${level.question}`;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    level.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerHTML = option;
        button.onclick = () => checkAnswer(option, levelIndex);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption, levelIndex) {
    const level = levels[levelIndex];
    const feedbackDiv = document.getElementById('feedback');
    if (selectedOption === level.answer) {
        feedbackDiv.innerHTML = 'Correct! Well done.';
        currentLevel++;
        if (currentLevel < levels.length) {
            setTimeout(() => {
                feedbackDiv.innerHTML = '';
                displayLevel(currentLevel);
            }, 1000);
        } else {
            feedbackDiv.innerHTML = 'Congratulations! You have completed all levels.';
        }
    } else {
        feedbackDiv.innerHTML = `Incorrect. The correct answer is: ${level.answer}`;
    }
}

// Initialize the game
displayLevel(currentLevel);
