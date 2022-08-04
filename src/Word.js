import wordBank from './wordle-bank.txt'

export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

export const generateWordSet = async () => {
    let wordSet;
    let word;
    await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => {
            const wordArr = result.split("\n");
            word = wordArr[Math.floor(Math.random() * wordArr.length)]
            wordSet = new Set(wordArr);
        });
    return { wordSet, word };
};