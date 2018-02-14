const Word = require('./word.js');
const prompt = require('prompt');

let underScores;


let pickWord = () => {
    //Randomly pick word from array
    let wordBank = ['peru', 'italy', 'germany', 'poland', 'china'];
    let randNum = [Math.floor(Math.random() * wordBank.length)];
    let guessWord = wordBank[randNum];
    //console.log(guessWord);
    let wordArray = [];
    for (var i = 0; i < guessWord.length; i++) {
        wordArray.push(' _ ');
    }
    let blankWord = wordArray.join();
    let underScores = blankWord.replace(/,/g, ' ');
    console.log(underScores);
    return underScores;
};

console.log(underScores);

pickWord();