const sections = [
    [
        { 
            question: "What is the force exerted on a knee joint during walking?",
            options: ["300N", "500N", "700N", "900N"], 
            answer: "700N", 
            image: "images/knee_joint.jpg",
            background: "images/biomechanics_background.jpg"
        },
        { 
            question: "Optimal MRI magnetic field strength?",
            options: ["0.5 Tesla", "1.5 Tesla", "3 Tesla", "5 Tesla"], 
            answer: "3 Tesla", 
            image: "images/mri_machine.jpg",
            background: "images/medical_imaging_background.jpg"
        },
        { 
            question: "Best material for a lightweight prosthetic limb?",
            options: ["Steel", "Titanium", "Plastic", "Carbon Fiber"], 
            answer: "Carbon Fiber", 
            image: "images/prosthetic_limb.jpg",
            background: "images/prosthetics_background.jpg"
        },
        // More questions for section 1...
    ],
    [
        { 
            question: "Common use of robotics in surgery?",
            options: ["Robotic Prosthetics", "Surgical Assistance", "Medical Imaging", "Diagnostic Tools"], 
            answer: "Surgical Assistance", 
            image: "images/robotic_surgery.jpg",
            background: "images/robotics_background.jpg"
        },
        { 
            question: "Technique that uses sound waves for imaging?",
            options: ["MRI", "CT Scan", "Ultrasound", "X-Ray"], 
            answer: "Ultrasound", 
            image: "images/ultrasound.jpg",
            background: "images/ultrasound_background.jpg"
        },
        { 
            question: "Implant to monitor heart activity?",
            options: ["Pacemaker", "Defibrillator", "ECG", "Stent"], 
            answer: "Pacemaker", 
            image: "images/pacemaker.jpg",
            background: "images/cardiology_background.jpg"
        },
        // More questions for section 2...
    ],
    [
        // Section 3 questions with images...
    ]
];

let currentSection = 0;
let currentQuestion = 0;

function displayQuestion() {
    const section = sections[currentSection];
    const questionData = section[currentQuestion];
    
    // Change section background
    document.getElementById('game').style.backgroundImage = `url(${questionData.background})`;
    document.getElementById('game').style.backgroundSize = 'cover';

    // Set section title
    document.getElementById('section-header').innerText = `Section ${currentSection + 1}`;

    // Display question text
    document.getElementById('question').innerHTML = questionData.question;

    // Display options
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerHTML = option;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });

    // Display image related to the question
    const questionImage = document.createElement('img');
    questionImage.src = questionData.image;
    questionImage.alt = "Question Image";
    questionImage.classList.add('question-image');
    document.getElementById('game').appendChild(questionImage);
}

function checkAnswer(selectedOption) {
    const section = sections[currentSection];
    const correctAnswer = section[currentQuestion].answer;
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.innerHTML = (selectedOption === correctAnswer) ? 'Correct!' : `Incorrect. The correct answer is: ${correctAnswer}`;
}

function nextQuestion() {
    const section = sections[currentSection];
    currentQuestion++;

    if (currentQuestion < section.length) {
        displayQuestion();
    } else {
        currentSection++;
        if (currentSection < sections.length) {
            currentQuestion = 0;
            displayQuestion();
        } else {
            document.getElementById('feedback').innerHTML = 'Congratulations! You have completed all sections.';
            document.getElementById('nextButton').style.display = 'none';
        }
    }
}

displayQuestion();
