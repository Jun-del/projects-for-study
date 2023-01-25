import { useState } from "react";

const useWordle = (solution) => {
	const [turn, setTurn] = useState(0); // Track turns (6 guesses = game over)
	const [currentGuess, setCurrentGuess] = useState(""); // Track what user is typing
	const [guesses, setGuesses] = useState([]); // Each guess is an array
	const [history, setHistory] = useState([]); // Each guess is a string
	const [isCorrect, setIsCorrect] = useState(false); // When user win = True

	// Format a guess into an array of letter objects
	// e.g., [{key: "a", color: "yellow"}]

	const formatGuess = () => {};

	// Add a new guess to the guesses state
	// Update the isCorrect state if the guess is correct
	// Add one to the turn state
	const addNewGuess = () => {};

	// Handle keyup event & track current guess
	// If user presses enter, add the new guess
	const handleKeyUp = ({ key }) => {
		// Use regex to check for alphabets only
		// Test the key against regex pattern to compare matches

		// If backspace if pressed, delete the last letter
		if (key === "Backspace") {
			setCurrentGuess((prev) => {
				// Return a new string based on the old stirng, removes the last character
				return prev.slice(0, -1);
			});

			return;
		}

		if (/^[A-Za-z]$/.test(key)) {
			if (currentGuess.length < 5) {
				setCurrentGuess((prev) => {
					return prev + key; // Add key onto the back of the string
				});
			}
		}
	};

	return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};

export default useWordle;
