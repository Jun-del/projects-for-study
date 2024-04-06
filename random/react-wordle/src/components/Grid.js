import React from "react";
import Row from "./Row.js";

export default function Grid({ currentGuess, guesses, turn }) {
	return (
		<div>
			{guesses.map((guess, index) => {
				if (turn === index) {
					return <Row key={index} currentGuess={currentGuess} />;
				}

				// 6 Rows
				return <Row key={index} guess={guess} />;
			})}
		</div>
	);
}
