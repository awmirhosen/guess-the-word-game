import React from "react";
import {useStateContext} from "../context/ContextProvider";

const GameOver = () => {
    const {gameOver, setGameOver, correctWord, currentAttempt} = useStateContext()



    return (
        <div className='gameOver'>
            <h3>
                {gameOver.guessedWord ? "you WIN" : "you LOSE"}
            </h3>
            <h1>
                Correct: {correctWord}
            </h1>
            {gameOver.guessedWord && (
                <h3>You guessed in {currentAttempt.attempt} Attempts </h3>
            )}
        </div>
    )
}
export default GameOver;