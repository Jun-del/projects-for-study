import styles from './HangmanWord.module.css';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

export default function HangmanWord({ guessedLetters, wordToGuess }: HangmanWordProps) {
  return (
    <div className={styles.word}>
      {wordToGuess.split('').map((letter, index) => (
        <span className={styles.underline}>
          <span
            key={index}
            className={guessedLetters.includes(letter) ? styles.visible : styles.hidden}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
