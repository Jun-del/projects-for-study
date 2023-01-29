import { useState } from 'react';
import words from './WordList.json';
import styles from './App.module.css';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    // Pick a random word from the list
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className={styles.body}>
      <div className={styles.modal}>Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <div className={styles.keyboard}>
        <Keyboard />
      </div>
      <h1>{wordToGuess}</h1>
    </div>
  );
}

export default App;
