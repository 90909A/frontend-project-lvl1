import readlineSync from 'readline-sync';

const startGameAndGetName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const printQuestionGetAnswer = (question) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const isUserAnswerCorrect = (userAnswer, correctAnswer, userName) => {
  if (`${userAnswer}` === `${correctAnswer}`) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  return false;
};

const finishGame = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export {
  startGameAndGetName,
  getRandomInRange,
  printQuestionGetAnswer,
  isUserAnswerCorrect,
  finishGame,
};
