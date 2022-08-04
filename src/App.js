import './App.css';
import {useEffect} from "react";
import {useState} from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import {boardDefault, generateWordSet} from './Word'
import {useStateContext} from "./context/ContextProvider";
import GameOver from "./components/GameOver";

function App() {

    const {board, setBoard, wordSet, setWordSet, gameOver, correctWord, setCorrectWord} = useStateContext()

    useEffect(() => {
        generateWordSet().then((words) => {
            setWordSet(words.wordSet);
            setCorrectWord(words.word)
        });
    }, []);

  return (
    <div className='App'>
      <nav>
        <h1>Word App</h1>
      </nav>
        <div className='game'>
        <Board />
            {gameOver.gameOver ? <GameOver /> : <Keyboard/> }
        </div>
    </div>
  );
}

export default App;
