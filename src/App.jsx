import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import Keyboard from "./components/Keyboard";
import Message from "./components/Message";
import "./App.css";

const App = () => {
  const [targetWord, setTargetWord] = useState("REACT");
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState("playing"); // "playing", "won", "lost"

  const handleGuess = (word) => {
    if (guesses.length >= 6 || status !== "playing") return;
    if (word === targetWord) {
      setStatus("won");
    } else if (guesses.length === 5) {
      setStatus("lost");
    }
    setGuesses([...guesses, word]);
  };

  const handleNewGame = () => {
    setTargetWord("PLANT"); // Replace with a random word if needed
    setGuesses([]);
    setStatus("playing");
  };

  return (
    <div className="app-container">
      <h1>Wordle Clone</h1>
      <GameBoard guesses={guesses} targetWord={targetWord} />
      <Keyboard onGuess={handleGuess} disabled={status !== "playing"} />
      <Message status={status} onNewGame={handleNewGame} />
    </div>
  );
};

export default App;
