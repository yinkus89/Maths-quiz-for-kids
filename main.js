// main.js
// Initialize an array of math questions
const questions = [
  new Question("What is 5 + 3?", ["6", "7", "8", "9"], "8"),
  new Question("What is 7 - 4?", ["2", "3", "4", "5"], "3"),
  new Question("What is 2 x 3?", ["5", "6", "7", "8"], "6"),
  new Question("What is 9 ÷ 3?", ["2", "3", "4", "5"], "3"),
  new Question("What is 10 + 5?", ["12", "14", "15", "16"], "15"),
  new Question("What is 12 - 8?", ["3", "4", "5", "6"], "4"),
  new Question("What is 4 x 5?", ["20", "21", "22", "23"], "20"),
  new Question("What is 16 ÷ 4?", ["3", "4", "5", "6"], "4"),
  new Question("What is 6 + 7?", ["11", "12", "13", "14"], "13"),
  new Question("What is 15 - 9?", ["5", "6", "7", "8"], "6"),
  new Question("What is 3 x 4?", ["10", "11", "12", "13"], "12"),
  new Question("What is 20 ÷ 5?", ["3", "4", "5", "6"], "4"),
  new Question("What is 8 + 2?", ["9", "10", "11", "12"], "10"),
  new Question("What is 10 - 7?", ["2", "3", "4", "5"], "3"),
  new Question("What is 9 x 2?", ["16", "17", "18", "19"], "18"),
  new Question("What is 18 ÷ 6?", ["2", "3", "4", "5"], "3"),
];

// Initialize the Quiz with the questions
const quiz = new Quiz(questions);

// Create a new instance of QuizApp to handle the quiz interface
const app = new QuizApp(quiz);

// Start the quiz
app.startQuiz();
