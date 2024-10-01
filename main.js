// Question Class
class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

// Quiz Class
class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.score = 0;
    this.currentQuestionIndex = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }

  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

// QuizApp Class (Handles DOM)
class QuizApp {
  constructor(quiz) {
    this.quiz = quiz;
    this.render();
  }

  render() {
    if (this.quiz.hasEnded()) {
      this.showScores();
    } else {
      this.showQuestion();
      this.showChoices();
    }
  }

  showQuestion() {
    const questionText = document.getElementById("quiz-question");
    questionText.textContent = this.quiz.getCurrentQuestion().text;
  }

  showChoices() {
    const choicesList = document.getElementById("quiz-choices");
    choicesList.innerHTML = "";

    const choices = this.quiz.getCurrentQuestion().choices;
    choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.onclick = () => {
        this.quiz.guess(choice);
        this.render();
      };
      choicesList.appendChild(li);
    });
  }

  showScores() {
    const quizResult = document.getElementById("quiz-result");
    const scoreSpan = document.getElementById("score");
    scoreSpan.textContent = `${this.quiz.score} / ${this.quiz.questions.length}`;

    document.getElementById("quiz-question").style.display = "none";
    document.getElementById("quiz-choices").style.display = "none";
    quizResult.style.display = "block";

    const restartBtn = document.getElementById("restart-btn");
    restartBtn.onclick = () => window.location.reload();
  }
}

// Initialize the questions
const questions = [
  new Question("5 + 3 =", ["6", "7", "8", "9"], "8"),
  new Question("6 x 2 =", ["10", "12", "14", "16"], "12"),
  new Question("9 - 4 =", ["5", "6", "7", "8"], "5"),
  new Question("7 + 2 =", ["8", "9", "10", "11"], "9"),
  new Question("3 x 3 =", ["6", "8", "9", "12"], "9"),
];

// Initialize the Quiz with questions
const quiz = new Quiz(questions);

// Start the QuizApp
new QuizApp(quiz);
