import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import GameOver from "./components/GameOver";
import Keyboard from "./components/Keyboard";
import { boardDefault, generateWordSet } from "./Words";

export const AppContext: any = createContext([[]]);

function App() {
  const [board, setBoard] = useState<any>(boardDefault);
  const [currAttempt, setCurrAttempt] = useState<any>({
    attempt: 0,
    letterPos: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetter, setDisabledLetter] = useState<any>([]);
  const [gameOver, setGameOver] = useState<any>({ end: false, win: false });

  const [correctWord, setCorrectWord] = useState<any>("");

  useEffect(() => {
    generateWordSet().then((words: any) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord.toUpperCase());
    });
  }, []);

  const onSelectLetter = (keyVal: any) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = { ...board };
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    console.log(currAttempt);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };
  const onSelectEnter = () => {
    if (currAttempt.letterPos < 5) return;
    else {
      let currWord = "";
      for (let i = 0; i < 5; i++) {
        currWord += board[currAttempt.attempt][i];
      }
      if (wordSet.has(currWord.toLowerCase())) {
        setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
      } else {
        alert("Word Not Found");
      }
      if (currWord === correctWord) {
        setGameOver({ end: true, win: true });

        return;
      }
      if (currAttempt?.attempt > 4) {
        setGameOver({ end: true, win: false });
      }
    }
  };
  const onSelectDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = { ...board };
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt?.letterPos - 1 });
  };
  return (
    <div className="App">
      <nav>
        <h1>Wordle-Niloy</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onSelectEnter,
          onSelectDelete,
          correctWord,
          disabledLetter,
          setDisabledLetter,
          gameOver,
          setGameOver,
        }}
      >
        <div className="game">
          <Board />
          {gameOver?.end ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
