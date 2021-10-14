import { 
    startGameAndGetName,
	printQuestionGetAnswer,
	isUserAnswerCorrect,
    finishGame
    }
from '../src/index.js'

const brainCalc = () => {
    let userName = startGameAndGetName();
    for (let correctAnswerCounter = 0; correctAnswerCounter < 3; correctAnswerCounter += 1) {
        let randomMathExample = makeRandomMathExampleString();
        let arrayMathExampleArrayString = convertMathExampleToArrayString(randomMathExample);
        let arrayMathExampleNumber = convertArrayMathExampleStringToNumber(arrayMathExampleArrayString);
        let correctAnswer = calculateMathExample(arrayMathExampleNumber);
        let userAnswer = printQuestionGetAnswer(randomMathExample);
        let userAnswerCorrectly = isUserAnswerCorrect(userAnswer, correctAnswer, userName);
        if (userAnswerCorrectly === false) {
            correctAnswerCounter = 0;
        }
    }
    finishGame(userName);
};


    const getRandomInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    const getRandomOperand = () => {
        const arrayOfMathOperands = ["+", "-", "*"];
        let randomIndex = Math.floor(Math.random() * arrayOfMathOperands.length);
        return arrayOfMathOperands[randomIndex];
    };
    
    // создает выражение-строку
    const makeRandomMathExampleString = () => {
        return `${getRandomInRange(1, 10)} ${getRandomOperand()} ${getRandomInRange(1,10)}`;
    };
    
    // создает массив из строк
    const convertMathExampleToArrayString = (mathExampleString) => {
        let separator = " ";
        let arrayMathExampleArrayString = mathExampleString.split(separator);
        return arrayMathExampleArrayString;
    };
    
    // переделывает массив из строк в массив из чисел
    const convertArrayMathExampleStringToNumber = (arrayMathExampleArrayString) => {
        let arrayMathExampleNumber = [];
        let i = 0;
        while (i < 3) {
            if (isNaN(arrayMathExampleArrayString[i])) {
                arrayMathExampleNumber.push(arrayMathExampleArrayString[i]);
                i += 1;
            } else {
                arrayMathExampleNumber.push(Number(arrayMathExampleArrayString[i]));
                i += 1;
            }
        }
        return arrayMathExampleNumber;
    };
    
    // считает результат
    const calculateMathExample = (arrayMathExampleNumber) => {
        switch(arrayMathExampleNumber[1]) {
            case '+': 
               return arrayMathExampleNumber[0] + arrayMathExampleNumber[2];
            case '-': 
                return arrayMathExampleNumber[0] - arrayMathExampleNumber[2];
            case '*': 
                return arrayMathExampleNumber[0] * arrayMathExampleNumber[2];
        }
    };
    


    
export { brainCalc };