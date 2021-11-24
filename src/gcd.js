import {
  startGameAndGetName,
  getRandomInRange,
  printQuestionGetAnswer,
  isUserAnswerCorrect,
  finishGame,
}
  from './index.js';

const calculateCorrectGcd = (initialNumber, firstNumber, secondNumber) => {
  let correctAnswer = 'unknown';
  for (let i = 0; initialNumber + i <= firstNumber && initialNumber + i <= secondNumber; i += 1) {
    if (firstNumber % (initialNumber + i) === 0 && secondNumber % (initialNumber + i) === 0) {
      correctAnswer = initialNumber + i;
    }
  }
  return correctAnswer;
};

const brainGcd = () => {
  const userName = startGameAndGetName();
  console.log('Find the greatest common divisor of given numbers.');
  for (let correctAnswerCounter = 0; correctAnswerCounter < 3; correctAnswerCounter += 1) {
    // [A] объяснить как работает
    const initialNumber = getRandomInRange(2, 10);
    const firstNumber = initialNumber * getRandomInRange(1, 10);
    const secondNumber = initialNumber * getRandomInRange(1, 10);
    const correctAnswer = calculateCorrectGcd(initialNumber, firstNumber, secondNumber);
    const userAnswer = printQuestionGetAnswer(`${firstNumber} ${secondNumber}`);
    const userAnswerCorrectly = isUserAnswerCorrect(userAnswer, correctAnswer, userName);
    if (userAnswerCorrectly === false) {
      break;
    }
    if (correctAnswerCounter === 2) {
      finishGame(userName);
    }
  }
};

export default brainGcd;
