// UI for Wordle
import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle.js";

// Components
import Grid from "./Grid.js";
import Keypad from "./Keypad.js";

export default function Wordle({ solution }) {
	const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyUp } =
		useWordle(solution);

	useEffect(() => {
		window.addEventListener("keyup", handleKeyUp);

		// Detach event listener if isCorrect is true
		if (isCorrect) {
			console.log("win");
			window.removeEventListener("keyup", handleKeyUp);
		}

		// When turns is over 5
		if (turn > 5) {
			console.log("out of guess");
			window.removeEventListener("keyup", handleKeyUp);
		}

		return () => window.removeEventListener("keyup", handleKeyUp);
	}, [handleKeyUp, isCorrect, turn]); // Call everytime user type a letter

	// Relevant info log

	// useEffect(() => {
	// 	console.log(guesses, turn, isCorrect);
	// }, [guesses, turn, isCorrect]);

	return (
		<div>
			<div>Solution - {solution}</div>
			<div>Current guess - {currentGuess}</div>
			<Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
			<Keypad usedKeys={usedKeys} />
		</div>
	);
}
