// UI for Wordle
import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle.js";
import Grid from "./Grid.js";
import Keypad from "./Keypad.js";

export default function Wordle({ solution }) {
	const { currentGuess, guesses, turn, isCorrect, handleKeyUp } = useWordle(solution);

	useEffect(() => {
		window.addEventListener("keyup", handleKeyUp);

		return () => window.removeEventListener("keyup", handleKeyUp);
	}, [handleKeyUp]); // Call everytime user type a letter

	useEffect(() => {
		console.log(guesses, turn, isCorrect);
	}, [guesses, turn, isCorrect]);

	return (
		<div>
			<div>Solution - {solution}</div>
			<div>Current guess - {currentGuess}</div>
			<Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
			<Keypad></Keypad>
		</div>
	);
}
