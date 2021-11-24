import {
  startGameAndGetName,
  getRandomInRange,
  printQuestionGetAnswer,
  isUserAnswerCorrect,
  finishGame,
}
  from './index.js';

const getCorrectAnswer = (randomNumber) => {
  if (randomNumber % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEven = () => {
  const userName = startGameAndGetName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let correctAnswerCounter = 0; correctAnswerCounter < 3; correctAnswerCounter += 1) {
    const randomNumber = getRandomInRange(1, 100);
    const correctAnswer = getCorrectAnswer(randomNumber);
    const userAnswer = printQuestionGetAnswer(randomNumber);
    const userAnswerCorrectly = isUserAnswerCorrect(userAnswer, correctAnswer, userName);
    if (userAnswerCorrectly === false) {
      break;
    }
    if (correctAnswerCounter === 2) {
      finishGame(userName);
    }
  }
};

export default brainEven;
