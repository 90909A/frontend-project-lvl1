import readlineSync from 'readline-sync';

const questionName = () => {
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    return userName;
};

const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const questionParity = (userName) => {
    for (let correctCount = 0; correctCount <= 3; correctCount += 1) {
        let randomNumber = getRandomInRange(1, 100);
        let correctAnswer = 'unknown';
            if (randomNumber % 2 === 0) {
                correctAnswer = 'yes';
            } else {
                correctAnswer = 'no';
            }
        console.log('Question: ' + randomNumber);
         let answerParity = readlineSync.question('Your answer: ');
            if (answerParity === correctAnswer) {
                console.log('Correct!');
            } else {
                console.log(`'${answerParity}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
                correctCount = 0;
            }

    }
    console.log(`Congratulations, ${userName}!`);
};

export { questionName, questionParity };