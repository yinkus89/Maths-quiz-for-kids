class Question {
  constructor(text, choices, answer) {
    this.text = text; // The question text
    this.choices = choices; // Array of possible answer choices
    this.answer = answer; // The correct answer
  }

  // Method to check if a selected answer is correct
  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

export default Question;
