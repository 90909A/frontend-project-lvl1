import { 
    startGameAndGetName,
	printQuestionGetAnswer,
	isUserAnswerCorrect,
    finishGame
    }
from '../src/index.js'

const brainPrime = () => {
    let userName = startGameAndGetName();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let correctAnswerCounter = 0; correctAnswerCounter < 3; correctAnswerCounter += 1) {
        let randomNumber = getRandomInRange(1, 100);
        let correctAnswer = getCorrectAnswer(randomNumber);
        let userAnswer = printQuestionGetAnswer(randomNumber);
        let userAnswerCorrectly = isUserAnswerCorrect(userAnswer, correctAnswer, userName);
        if (userAnswerCorrectly === false) {
            correctAnswerCounter = -1;
        }
    }
    finishGame(userName);
};

const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getCorrectAnswer = (randomNumber) => {
    if (randomNumber === 2 || randomNumber === 3 || randomNumber === 5 || randomNumber === 7) {
        return 'yes';
    }
    if (randomNumber % 2 === 0 || randomNumber % 3 === 0 || randomNumber % 5 === 0 || randomNumber % 7 === 0) {
        return 'no'
    }
    return 'yes';
};

export { brainPrime };