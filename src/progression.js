import {
  startGameAndGetName,
  getRandomInRange,
  printQuestionGetAnswer,
  isUserAnswerCorrect,
  finishGame,
}
  from './index.js';

const getRandomArray = (firstNumber, arrayLength, progressionOfNumbers, hiddenNumber) => {
  const randomArray = [];

  for (let i = 0; randomArray.length < arrayLength; i += progressionOfNumbers) {
    if (randomArray.length === hiddenNumber) {
      randomArray.push('..');
    } else {
      randomArray.push(firstNumber + i);
    }
  }
  return randomArray.join(' ');
};

const getCorrectAnswer = (hiddenNumber, progressionOfNumbers, firstNumber) => {
  if (hiddenNumber === 0) {
    return firstNumber;
  }
  return firstNumber + progressionOfNumbers * hiddenNumber;
};

const brainProgression = () => {
  const userName = startGameAndGetName();
  console.log('What number is missing in the progression?');
  for (let correctAnswerCounter = 0; correctAnswerCounter < 3; correctAnswerCounter += 1) {
    const firstNumber = getRandomInRange(1, 20);
    const arrayLength = getRandomInRange(5, 10);
    const progressionOfNumbers = getRandomInRange(2, 5);
    const hiddenNumber = getRandomInRange(0, arrayLength - 1);
    const correctAnswer = getCorrectAnswer(hiddenNumber, progressionOfNumbers, firstNumber);
    const randomArr = getRandomArray(firstNumber, arrayLength, progressionOfNumbers, hiddenNumber);
    const userAnswer = printQuestionGetAnswer(randomArr);
    const userAnswerCorrectly = isUserAnswerCorrect(userAnswer, correctAnswer, userName);
    if (userAnswerCorrectly === false) {
      break;
    }
    if (correctAnswerCounter === 2) {
      finishGame(userName);
    }
  }
};

export default brainProgression;
