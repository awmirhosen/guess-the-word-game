import React,{ createContext, useContext, useState } from "react";
import {boardDefault} from "../Word";

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
    // define states
    const [board, setBoard] = useState(boardDefault);
    const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPos: 0});
    const [correctWord, setCorrectWord] = useState("");
    const [wordSet, setWordSet] = useState(new Set());
    const [disableLetters, setDisableLetters] = useState([]);
    const [gameOver, setGameOver] = useState({
        gameOver: false,
        guessedWord: false,
    });

    // click handle function for cart, chat, notification and profile
    const onEnter = () => {
        if (currentAttempt.letterPos !== 5) return;

        let currentWord = "";
        for (let i = 0; i < 5; i ++) {
            currentWord += board[currentAttempt.attempt][i].toLowerCase();
        }


        if (wordSet.has(currentWord.toLowerCase())) {
            setCurrentAttempt({attempt: currentAttempt.attempt + 1, letterPos: 0});
        }else {
            alert('word not found');
        }


        if (currentWord === correctWord){
            setGameOver({ gameOver: true, guessedWord: true });
            return;
        }

        console.log(correctWord)

        if(currentAttempt.attempt === 5 ){
            setGameOver({ gameOver: true, guessedWord: false });
            return;
        }

    }

    const onDelete = () => {
        if (currentAttempt.letterPos === 0) return;
        const newBoard = [...board]
        newBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = ''
        setBoard(newBoard);
        setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos - 1});
    }

    const onSelectLetter = (keyVal) => {
        if (currentAttempt.letterPos > 4) return;
        const newBoard = [...board];
        newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal;
        setBoard(newBoard)
        setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1})
    }


    return (
        <StateContext.Provider value={{ board, setBoard, currentAttempt, setCurrentAttempt, onEnter, onDelete, onSelectLetter, wordSet, setWordSet, disableLetters, setDisableLetters, gameOver, setGameOver, correctWord, setCorrectWord }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);