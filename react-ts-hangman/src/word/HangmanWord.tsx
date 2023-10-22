import styles from './HangmanWord.module.css';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  revealWord?: boolean;
};

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
  revealWord = false,
}: HangmanWordProps) {
  return (
    <div className={styles.word}>
      {wordToGuess.split('').map((letter, index) => (
        <span className={styles.underline} key={index}>
          <span
            className={
              guessedLetters.includes(letter) || revealWord ? styles.visible : styles.hidden
            }
            style={{
              color: !guessedLetters.includes(letter) && revealWord ? 'red' : 'black',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
