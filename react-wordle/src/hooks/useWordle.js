import { useState } from "react";

const useWordle = (solution) => {
	const [turn, setTurn] = useState(0); // Track turns (6 guesses = game over)
	const [currentGuess, setCurrentGuess] = useState(""); // Track what user is typing
	const [guesses, setGuesses] = useState([]); // Each guess is an array
	const [history, setHistory] = useState(["hello", "nihao"]); // Each guess is a string
	const [isCorrect, setIsCorrect] = useState(false); // When user win = True

	// Format a guess into an array of letter objects
	// e.g., [{key: "a", color: "yellow"}]

	const formatGuess = () => {
		console.log("Formatting the guess", currentGuess);
	};

	// Add a new guess to the guesses state
	// Update the isCorrect state if the guess is correct
	// Add one to the turn state
	const addNewGuess = () => {};

	// Fires everytime the user enters any key on the keyboard
	// Handle keyup event & track current guess
	// If user presses enter, add the new guess
	const handleKeyUp = ({ key }) => {
		if (key === "Enter") {
			// Only add guess if turn is less than 5
			if (turn > 5) {
				console.log("You used all the guesses");
				return;
			}

			// Do not allow duplicated word / submission
			if (history.includes(currentGuess)) {
				console.log("you already tried that word.");
				return;
			}

			// Word must be 5 characters long
			if (currentGuess.length !== 5) {
				console.log("Word must be 5 chars long");
				return;
			}

			// Insert the guess as valid input
			formatGuess(currentGuess);
		}

		if (key === "Backspace") {
			// If backspace if pressed, delete the last letter
			setCurrentGuess((prev) => {
				// Return a new string based on the old stirng, removes the last character
				return prev.slice(0, -1);
			});

			return;
		}

		// Use regex to check for alphabets only
		// Test the key against regex pattern to compare matches
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
