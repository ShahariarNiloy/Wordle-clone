import React, { createContext, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault } from "./Words";

export const AppContext: any = createContext([[]]);

function App() {
  const [board, setBoard] = useState<any>(boardDefault);
  const [currAttempt, setCurrAttempt] = useState<any>({
    attempt: 0,
    letterPos: 0,
  });
  return (
    <div className="App">
      <nav>
        <h1>Wordle-Niloy</h1>
      </nav>
      <AppContext.Provider
        value={{ board, setBoard, currAttempt, setCurrAttempt }}
      >
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
