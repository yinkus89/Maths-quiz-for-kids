class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

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
    const currentQuestion = this.getCurrentQuestion();
    if (currentQuestion.isCorrectAnswer(answer)) {
      this.playSound("correct-sound");
      this.score++;
    } else {
      this.playSound("incorrect-sound");
    }
    this.currentQuestionIndex++;
  }

  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }

  playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.currentTime = 0; // Reset sound to start
    sound.play(); // Play the sound
  }
}

class QuizApp {
  constructor(quiz, totalTime) {
    this.quiz = quiz;
    this.totalTime = totalTime;
    this.timeLeft = totalTime;
    this.timer = null;
    this.render();
    this.startTimer();
  }

  startTimer() {
    const timerElement = document.getElementById("timer");
    this.timer = setInterval(() => {
      this.timeLeft--;
      timerElement.textContent = `Time left: ${this.timeLeft}s`;

      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.showScores();
      }
    }, 1000);
  }

  render() {
    if (this.quiz.hasEnded() || this.timeLeft <= 0) {
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
        const clickSound = document.getElementById("click-sound");
        clickSound.currentTime = 0; // Reset sound to start
        clickSound.play(); // Play the click sound

        this.quiz.guess(choice);
        this.render();
      };
      choicesList.appendChild(li);
    });
  }

  showScores() {
    clearInterval(this.timer);
    const quizResult = document.getElementById("quiz-result");
    const scoreSpan = document.getElementById("score");
    scoreSpan.textContent = `${this.quiz.score} / ${this.quiz.questions.length}`;

    document.getElementById("quiz-question").style.display = "none";
    document.getElementById("quiz-choices").style.display = "none";
    quizResult.style.display = "block";

    document.getElementById("restart-btn").style.display = "block";
  }
}

// Initialize questions
const questions = [
  new Question("What is 5 + 3?", ["6", "7", "8", "9"], "8", "easy"),
  new Question("What is 6 x 2?", ["10", "12", "14", "16"], "12", "medium"),
  new Question("What is 12 ÷ 4?", ["2", "3", "4", "5"], "3", "medium"),
  new Question("What is 5 x 6?", ["28", "30", "32", "36"], "30", "medium"),
  new Question("What is 15 - 9?", ["6", "5", "4", "7"], "6", "medium"),
  new Question("What is 7 + 8?", ["14", "15", "16", "17"], "15", "medium"),
  new Question("What is 4 x 7?", ["28", "24", "30", "32"], "28", "medium"),
  new Question("What is 10 - 3?", ["6", "7", "8", "5"], "7", "easy"),
  new Question("What is 3 + 5?", ["5", "7", "8", "9"], "8", "easy"),
  new Question("What is 5 - 2?", ["3", "2", "4", "5"], "3", "easy"),
  new Question("What is 6 + 4?", ["8", "10", "12", "14"], "10", "easy"),
  new Question("What is 25 + 30?", ["55", "60", "70", "50"], "55", "hard"),
  new Question("What is 18 - 7?", ["9", "10", "11", "12"], "11", "hard"),
  new Question("What is 9 x 9?", ["81", "72", "90", "75"], "81", "hard"),
  new Question("What is 16 ÷ 2?", ["6", "7", "8", "9"], "8", "hard"),
  new Question("What is 50 - 20?", ["25", "20", "30", "35"], "30", "hard"),
];

// Start the quiz when the button is clicked
document.getElementById("start-quiz-btn").addEventListener("click", () => {
  const clickSound = document.getElementById("click-sound");
  clickSound.currentTime = 0; // Reset sound to start
  clickSound.play();

  const selectedDifficulty = document.getElementById("difficulty-select").value;

  // Filter the questions based on selected difficulty
  const filteredQuestions = questions.filter(
    (question) => question.difficulty === selectedDifficulty
  );

  if (filteredQuestions.length > 0) {
    const quiz = new Quiz(filteredQuestions);
    new QuizApp(quiz, 60); // 60 seconds timer

    document.getElementById("start-quiz-btn").style.display = "none";
    document.getElementById("restart-btn").style.display = "none";
  } else {
    alert("No questions available for the selected difficulty.");
  }
});

// Restart the quiz
document.getElementById("restart-btn").addEventListener("click", () => {
  window.location.reload();
});
