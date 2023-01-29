import styles from './HangmanWord.module.css';

const word = 'test';
const guessedLetters = ['a', 'b', 'c'];

export default function HangmanWord() {
  return (
    <div className={styles.word}>
      {word.split('').map((letter, index) => (
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
