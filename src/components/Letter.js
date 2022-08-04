import React, {useEffect} from "react";
import {useStateContext} from "../context/ContextProvider";

const Letter = ({ letterPos, attemptVal }) => {
    const {board, setBoard, correctWord, currentAttempt, disableLetters, setDisableLetters} = useStateContext()
    const letter = board[attemptVal][letterPos]

    const correct = correctWord.toUpperCase()[letterPos] === letter;
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

    useEffect(() => {
        if (letter !== "" && !correct && !almost){
            setDisableLetters((prev) => [...prev, letter])

        }
    }, [currentAttempt.attempt]);


    const letterState =
        currentAttempt.attempt > attemptVal &&
        (correct ? "correct" : almost ? "almost" : "error");

    return (
        <div className='letter' id={letterState} >
            {" "}
            {letter}
        </div>
    )
}
export default Letter