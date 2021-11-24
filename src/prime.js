import {
  startGameAndGetName,
  getRandomInRange,
  printQuestionGetAnswer,
  isUserAnswerCorrect,
  finishGame,
}
  from './index.js';

const getCorrectAnswer = (randomNumber) => {
  // [A] проверку вынести в отдельный метод и объяснить
  if (randomNumber === 2 || randomNumber === 3 || randomNumber === 5 || randomNumber === 7) {
    return 'yes';
  }
  if (randomNumber % 2 === 0
      || randomNumber % 3 === 0
      || randomNumber % 5 === 0
      || randomNumber % 7 === 0) {
    return 'no';
  }
  return 'yes';
};

const brainPrime = () => {
  const userName = startGameAndGetName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
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

export default brainPrime;
