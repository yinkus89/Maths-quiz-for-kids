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
