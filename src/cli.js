import readlineSync from 'readline-sync';

const questionName = () => {
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    return userName;
};

export { questionName };