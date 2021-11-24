import {
  startGameAndGetName,
  getRandomInRange,
  printQuestionGetAnswer,
  isUserAnswerCorrect,
  finishGame,
}
  from './index.js';

const getRandomOperand = () => {
  const arrayOfMathOperands = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * arrayOfMathOperands.length);
  return arrayOfMathOperands[randomIndex];
};

// создает выражение-строку
const makeRandomMathExampleString = () => `${getRandomInRange(1, 10)} ${getRandomOperand()} ${getRandomInRange(1, 10)}`;

// создает массив из строк
const convertMathExampleToArrayString = (mathExampleString) => {
  const separator = ' ';
  const arrayMathExampleString = mathExampleString.split(separator);
  return arrayMathExampleString;
};

// переделывает массив из строк в массив из чисел
const convertArrayMathExampleStringToNumber = (arrayMathExampleString) => {
  const arrMathExampleNumber = [];
  let i = 0;
  while (i <= arrayMathExampleString.length) {
    if (i === 1) {
      arrMathExampleNumber.push(arrayMathExampleString[i]);
      i += 1;
    } else {
      arrMathExampleNumber.push(Number(arrayMathExampleString[i]));
      i += 1;
    }
  }
  return arrMathExampleNumber;
};

// считает результат
const calculateMathExample = (arrayMathExampleNumber) => {
  switch (arrayMathExampleNumber[1]) {
    case '+':
      return arrayMathExampleNumber[0] + arrayMathExampleNumber[2];
    case '-':
      return arrayMathExampleNumber[0] - arrayMathExampleNumber[2];
    case '*':
      return arrayMathExampleNumber[0] * arrayMathExampleNumber[2];
    default:
      return 'error';
  }
};

const brainCalc = () => {
  const userName = startGameAndGetName();
  console.log('What is the result of the expression?');
  for (let correctAnswerCounter = 0; correctAnswerCounter < 3; correctAnswerCounter += 1) {
    const randomMathExample = makeRandomMathExampleString();
    const arrayMathExampleString = convertMathExampleToArrayString(randomMathExample);
    const arrMathExampleNumber = convertArrayMathExampleStringToNumber(arrayMathExampleString);
    const correctAnswer = calculateMathExample(arrMathExampleNumber);
    const userAnswer = printQuestionGetAnswer(randomMathExample);
    const userAnswerCorrectly = isUserAnswerCorrect(userAnswer, correctAnswer, userName);
    if (userAnswerCorrectly === false) {
      break;
    }
    if (correctAnswerCounter === 2) {
      finishGame(userName);
    }
  }
};

export default brainCalc;
