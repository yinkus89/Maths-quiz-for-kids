# Math Quiz for Kids

Welcome to **Math Quiz for Kids**, an interactive web-based quiz game designed to help children practice and improve their math skills! The game provides questions of varying difficulty levels, tracks the player's score, and has a timer to keep the game engaging and fun.

## Features

- **Multiple Difficulty Levels**: Choose from easy, medium, or hard questions.
- **Interactive User Interface**: Simple, easy-to-use interface for kids.
- **Timer**: A countdown timer adds excitement and encourages quick thinking.
- **Score Tracking**: Keep track of the player's correct answers.
- **Sound Effects**: Play sounds for correct and incorrect answers, and button clicks.
- **Restart Functionality**: Restart the quiz at any time.
- **Dynamic Question Set**: Randomized questions to keep the game challenging.

## Game Logic

### 1. `Question` Class

This class is responsible for handling the details of each question in the quiz. Each question consists of a question text, possible choices, the correct answer, and a difficulty level.

#### Properties:

- `text` (String): The actual question.
- `choices` (Array): Multiple answer choices.
- `answer` (String): The correct answer.
- `difficulty` (String): The difficulty level (`easy`, `medium`, `hard`).

#### Methods:

- `isCorrectAnswer(choice)`: Checks if the selected choice matches the correct answer.

### 2. `Quiz` Class

This class manages the quiz's state, including the list of questions, the current score, and progress through the quiz.

#### Properties:

- `questions` (Array of `Question` objects): The list of quiz questions.
- `score` (Number): The player's score.
- `currentQuestionIndex` (Number): Tracks the current question number.

#### Methods:

- `getCurrentQuestion()`: Returns the current question being displayed.
- `guess(answer)`: Checks if the player's answer is correct and updates the score.
- `hasEnded()`: Checks if the quiz has ended (all questions answered).
- `playSound(soundId)`: Plays a sound when the player answers correctly or incorrectly.

### 3. `QuizApp` Class

The `QuizApp` class handles the game mechanics, user interface, and interactions. It controls the game timer, renders questions and choices, and handles restarting the quiz.

#### Properties:

- `quiz` (Instance of `Quiz`): Holds the quiz logic and questions.
- `totalTime` (Number): The time limit for the quiz.
- `timeLeft` (Number): Time remaining for the current quiz.
- `timer` (Interval): Holds the timer instance for countdown.

#### Methods:

- `startTimer()`: Initializes the countdown timer for the quiz.
- `render()`: Updates the user interface with the current question and choices.
- `showQuestion()`: Displays the current question on the screen.
- `showChoices()`: Displays the multiple-choice answers.
- `showScores()`: Displays the player's score at the end of the quiz.

### 4. User Interface & Audio Elements

- Buttons: **Start Quiz**, **Restart Quiz**
- **Score** display: Shows current score during the quiz and at the end.
- **Timer**: Displays remaining time.
- **Audio effects**: Plays sounds for button clicks, correct and incorrect answers.

## How to Play

1. **Choose a Difficulty Level**: Select the desired difficulty (`easy`, `medium`, or `hard`) from the dropdown.
2. **Start the Quiz**: Click the **Start Quiz** button to begin the quiz.
3. **Answer the Questions**: Select the correct answer from the multiple choices displayed. The quiz will play a sound effect to indicate if the answer was correct or incorrect.
4. **Finish the Quiz**: Your score will be displayed once you complete all the questions or the timer runs out.
5. **Restart the Quiz**: Click the **Restart Quiz** button to play again.

## Game Controls

- **Arrow Keys**: Navigate through the quiz questions.
- **Mouse Clicks**: Select answers and interact with buttons.

## Technologies Used

- **HTML5**: For structuring the game page.
- **CSS3**: For styling the game interface.
- **JavaScript(ES6)** : For the game logic and interactions.

## Installation & Setup

To run the Math Quiz game locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/yinkus89/math-quiz-kids.git
   ```
