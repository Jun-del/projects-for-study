import styles from './HangmanDrawing.module.css';

const HEAD = <div className={styles.head}></div>;
const BODY = <div className={styles.body}></div>;
const RIGHT_ARM = <div className={styles.rightArm}></div>;
const LEFT_ARM = <div className={styles.leftArm}></div>;
const RIGHT_LEG = <div className={styles.rightLeg}></div>;
const LEFT_LEG = <div className={styles.leftLeg}></div>;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className={styles.hangman}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className={styles.bar} />
      <div className={styles.rope} />
      <div className={styles.pole} />
      <div className={styles.base} />
    </div>
  );
}
