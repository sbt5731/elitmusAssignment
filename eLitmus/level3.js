var questions = [  {    question: "What is the capital of France?",    options: ["New York", "London", "Paris", "Dublin"],
    answer: "Paris"
  },
  {
    question: "What is the largest country in the world?",
    options: ["USA", "Canada", "Russia", "China"],
    answer: "Russia"
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Dollar", "Euro", "Pound"],
    answer: "Yen"
  },
  {
    question: "What is the national animal of India?",
    options: ["Lion", "Elephant", "Tiger", "Giraffe"],
    answer: "Tiger"
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "Nauru", "San Marino"],
    answer: "Vatican City"
  },
  {
    question: "What is the currency of Brazil?",
    options: ["Real", "Peso", "Dollar", "Euro"],
    answer: "Real"
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    answer: "Canberra"
  },
  {
    question: "What is the currency of South Africa?",
    options: ["Rand", "Dollar", "Pound", "Euro"],
    answer: "Rand"
  },
  {
    question: "What is the national animal of Australia?",
    options: ["Kangaroo", "Emu", "Koala", "Wombat"],
    answer: "Kangaroo"
  },
  {
    question: "What is the currency of Mexico?",
    options: ["Peso", "Dollar", "Real", "Euro"],
    answer: "Peso"
  }
];
// Define variables to keep track of the current question and score
var currentQuestion = 0;
var score = 0;

// Get references to the HTML elements
var questionText = document.querySelector(".question-text");
var optionContainer = document.querySelector(".option-container");
var resultContainer = document.querySelector(".result-container");
var resultText = document.querySelector(".result-text");
var scoreText = document.querySelector(".score-text");
var leveltest = document.querySelector(".level-text")
var nextButton = document.querySelector(".next-button");
var levelButton = document.querySelector(".level-button");

// Function to display the current question and options
function displayQuestion() {
  var currentQ = questions[currentQuestion];
  questionText.textContent = currentQ.question;
  optionContainer.innerHTML = "";
  for (var i = 0; i < currentQ.options.length; i++) {
    var option = document.createElement("button");
    option.textContent = currentQ.options[i];
    option.classList.add("option");
    optionContainer.appendChild(option);
  }
}

// Function to check the selected option against the correct answer
function checkAnswer(selectedOption) {
  var currentQ = questions[currentQuestion];
  if (selectedOption.textContent === currentQ.answer) {
    selectedOption.classList.add("correct");
    resultText.textContent = "Correct!";
    score++;
  } else {
    selectedOption.classList.add("incorrect");
    resultText.textContent = "Incorrect!";
  }
  // Disable all options and show the result container
  var options = optionContainer.querySelectorAll(".option");
  for (var i = 0; i < options.length; i++) {
    options[i].disabled = true;
  }
  resultContainer.classList.remove
  ("hide");
  scoreText.textContent = score;
}

// Add event listeners to the options and buttons
optionContainer.addEventListener("click", function(event) {
  if (event.target.matches(".option")) {
    checkAnswer(event.target);
  }
});

nextButton.addEventListener("click", function() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
    resultContainer.classList.add("hide");
    var options = optionContainer.querySelectorAll(".option");
    for (var i = 0; i < options.length; i++) {
      options[i].disabled = false;
      options[i].classList.remove("correct", "incorrect");
    }
  } else {
    levelButton.classList.remove("hide");
    nextButton.disabled = true;
  }
});

// add a click event listener to the level button
levelButton.addEventListener('click', () => {
    // check if the user has completed all the questions and scored more than 7
    if (score >= 7 && currentQuestion >= questions.length) {
      // if so, redirect the user to level 4
      leveltest.innerText = "4";
      alert("Congratulations! You've completed all the questions and scored more than 7. You can now proceed to Level 4.")
      window.location.href = 'dashboard.html';
    } else {
      // if not, show an alert box asking the user to try again
      alert('You need to complete all the questions and score more than 7 to proceed to the next level. Please try again.');
    }
  });

// Display the first question
displayQuestion();
resultContainer.classList.add("hide");
scoreText.textContent = score;