import readlineSync from "readline-sync";

const startGameAndGetName = () => {
	console.log("Welcome to the Brain Games!");
	let userName = readlineSync.question("May I have your name? ");
	console.log("Hello, " + userName + "!");
	return userName;
};


const printQuestionGetAnswer = (question) => {
	console.log("Question: " + question);
	let userAnswer = readlineSync.question("Your answer: ");
	return userAnswer;
};

const isUserAnswerCorrect = (userAnswer, correctAnswer, userName) => {
	if (toString(userAnswer) === toString(correctAnswer)) {
		console.log("Correct!");
		return true;
	} else {
		console.log(
			`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
			return false;
	}
};

const finishGame = (userName) => {
	console.log(`Congratulations, ${userName}!`);
}

export {
	startGameAndGetName,
	printQuestionGetAnswer,
	isUserAnswerCorrect,
	finishGame
};
