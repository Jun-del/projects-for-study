import React from "react";

export default function Row({ guess, currentGuess }) {
	// If not undefined
	if (guess) {
		return (
			<div className="row past">
				{guess.map((letter, index) => (
					<div key={index} className={letter.color}>
						{letter.key}
					</div>
				))}
			</div>
		);
	}

	// Check for the current guess props
	if (currentGuess) {
		let letters = currentGuess.split("");

		return (
			<div className="row current">
				{letters.map((letter, index) => (
					<div key={index} className="filled">
						{letter}
					</div>
				))}

				{/* Create an empty array with undefined value for the five brackets */}
				{[...Array(5 - letters.length)].map((value, index) => (
					// Empty squares in the row
					<div key={index}></div>
				))}
			</div>
		);
	}

	// Else output empty row
	return (
		// Five square per row (one row five square)
		<div className="row">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
