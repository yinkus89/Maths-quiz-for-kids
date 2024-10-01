class QuizApp {
  constructor(quiz) {
    this.quiz = quiz; // Store the quiz instance
    this.questionElement = document.getElementById("quiz-question"); // Element for the question
    this.choicesElement = document.getElementById("quiz-choices"); // Element for the choices
    this.resultElement = document.getElementById("quiz-result"); // Element for the results
    this.scoreElement = document.getElementById("score"); // Element for displaying the score
    this.restartButton = document.getElementById("restart-btn"); // Restart button element

    this.restartButton.addEventListener("click", () => this.restartQuiz()); // Event listener for restart
  }

  startQuiz() {
    this.showQuestion(); // Display the first question
  }

  showQuestion() {
    if (this.quiz.isFinished()) {
      this.displayResult(); // Show result if finished
    } else {
      const currentQuestion = this.quiz.getCurrentQuestion();
      this.questionElement.innerText = currentQuestion.text; // Display question text
      this.choicesElement.innerHTML = ""; // Clear previous choices
      currentQuestion.choices.forEach((choice) => {
        const button = document.createElement("button"); // Create a button for each choice
        button.innerText = choice;
        button.addEventListener("click", () => this.handleAnswer(choice)); // Event listener for each choice
        this.choicesElement.appendChild(button); // Add button to the choices element
      });
    }
  }

  handleAnswer(selectedAnswer) {
    this.quiz.checkAnswer(selectedAnswer); // Check the selected answer
    this.showQuestion(); // Show the next question
  }

  displayResult() {
    this.questionElement.style.display = "none"; // Hide question
    this.choicesElement.style.display = "none"; // Hide choices
    this.resultElement.style.display = "block"; // Show result section
    this.scoreElement.innerText = this.quiz.getScore(); // Display the score
  }

  restartQuiz() {
    this.quiz.reset(); // Reset the quiz
    this.questionElement.style.display = "block"; // Show question
    this.choicesElement.style.display = "block"; // Show choices
    this.resultElement.style.display = "none"; // Hide result
    this.startQuiz(); // Start the quiz again
  }
}
