// UI for Wordle
import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle.js";

export default function Wordle({ solution }) {
	const { currentGuess, handleKeyUp } = useWordle(solution);

	useEffect(() => {
		window.addEventListener("keyup", handleKeyUp);

		return () => window.removeEventListener("keyup", handleKeyUp);
	}, [handleKeyUp]); // Call everytime user type a letter

	return (
		<div>
			<div>Solution - {solution}</div>
			<div>Current guess - {currentGuess}</div>
		</div>
	);
}
