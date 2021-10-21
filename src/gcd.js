import { 
    startGameAndGetName,
	printQuestionGetAnswer,
	isUserAnswerCorrect,
    finishGame
    }
from '../src/index.js'

const brainGcd = () => {
    let userName = startGameAndGetName();
    console.log('Find the greatest common divisor of given numbers.');
    for (let correctAnswerCounter = 0; correctAnswerCounter < 3; correctAnswerCounter += 1) {
        let initialNumber = getRandomInRange(2, 10);
        let firstNumber = initialNumber * getRandomInRange(1, 10);
        let secondNumber = initialNumber * getRandomInRange(1, 10);
        let correctAnswer = calculateCorrectGcd(initialNumber, firstNumber, secondNumber);
        let userAnswer = printQuestionGetAnswer(`${firstNumber} ${secondNumber}`);
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

const calculateCorrectGcd = (initialNumber, firstNumber, secondNumber) => {
    let correctAnswer = 'unknown';
    for (let i = 0; initialNumber + i <= firstNumber && initialNumber + i <= secondNumber; i += 1) {
            if (firstNumber % (initialNumber + i) === 0 && secondNumber % (initialNumber + i) === 0) {
                correctAnswer = initialNumber + i;
            }
    }
    return correctAnswer;
};

export { brainGcd };