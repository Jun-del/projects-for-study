import { useCallback, useEffect, useState } from 'react';
import words from './data/WordList.json';
import styles from './App.module.css';
import HangmanDrawing from './drawing/HangmanDrawing';
import HangmanWord from './word/HangmanWord';
import Keyboard from './keyboard/Keyboard';

function getWord() {
  // Pick a random word from the list
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));

  // 6 is the number of guesses (body parts) allowed
  const isLoser = incorrectLetters.length >= 6;

  const isWinner = wordToGuess.split('').every((letter) => guessedLetters.includes(letter));

  // useCallback is used to memoize the function
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetter) => [...currentLetter, letter]);
    },
    [guessedLetters, isLoser, isWinner],
  );

  // This effect is used to listen to keypresses
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key;

      if (!key.match(/^[a-z]$/)) return;

      event.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key;

      if (key !== 'Enter') return;

      event.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.modal}>
        {isWinner && <h1>You won!</h1>}
        {isLoser && <h1>You lost!</h1>}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord revealWord={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div className={styles.keyboard}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
      <h1></h1>
    </div>
  );
}

export default App;
