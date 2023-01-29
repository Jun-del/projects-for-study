import styles from './HangmanDrawing.module.css';

const Head = <div className={styles.head}></div>;
const Body = <div className={styles.body}></div>;
const RightArm = <div className={styles.rightArm}></div>;
const LeftArm = <div className={styles.leftArm}></div>;
const RightLeg = <div className={styles.rightLeg}></div>;
const LeftLeg = <div className={styles.leftLeg}></div>;

export default function HangmanDrawing() {
  return (
    <div className={styles.hangman}>
      {Head}
      {Body}
      {RightArm}
      {LeftArm}
      {RightLeg}
      {LeftLeg}
      <div className={styles.bar} />
      <div className={styles.rope} />
      <div className={styles.pole} />
      <div className={styles.base} />
    </div>
  );
}
