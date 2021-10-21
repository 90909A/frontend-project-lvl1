import { 
    startGameAndGetName,
	printQuestionGetAnswer,
	isUserAnswerCorrect,
    finishGame
    }
from '../src/index.js'

const brainProgression = () => {
    let userName = startGameAndGetName();
    console.log('What number is missing in the progression?');
    for (let correctAnswerCounter = 0; correctAnswerCounter < 3; correctAnswerCounter += 1) {
        let firstNumber = getRandomInRange(1, 20);
        let arrayLength = getRandomInRange(5, 10);
        let progressionOfNumbers = getRandomInRange(2, 5);
        let hiddenNumber = getRandomInRange(0, arrayLength - 1);
        let correctAnswer = getCorrectAnswer(hiddenNumber, progressionOfNumbers, firstNumber);
        let userAnswer = printQuestionGetAnswer(getRandomArray(firstNumber, arrayLength, progressionOfNumbers, hiddenNumber));
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

const getRandomArray = (firstNumber, arrayLength, progressionOfNumbers, hiddenNumber) => {
    let randomArray = [];

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
    } else {
        return firstNumber + progressionOfNumbers * hiddenNumber;
    }
};

export { brainProgression };