import { useState } from "react";

const useWordle = (solution) => {
	const [turn, setTurn] = useState(0); // Track turns (6 guesses = game over)
	const [currentGuess, setCurrentGuess] = useState(""); // Track what user is typing
	// Each guess is an array, create an array with length of 6 (6 turns)
	const [guesses, setGuesses] = useState([...Array(6)]);
	const [history, setHistory] = useState([]); // Each guess is a string
	const [isCorrect, setIsCorrect] = useState(false); // When user win = True
	const [usedKeys, setUsedKeys] = useState({}); // {key: color} {a: 'green', b: 'yellow', c: 'grey'}

	// Format a guess into an array of letter objects
	// e.g., [{key: "a", color: "yellow"}]

	const formatGuess = () => {
		// Spread the string into an array of letters
		let solutionArray = [...solution];
		let formattedGuess = [...currentGuess].map((letter) => {
			// Default the color to gray
			return { key: letter, color: "grey" };
		});

		// Find any green letter (correct position and letters)
		formattedGuess.forEach((letter, index) => {
			// If solution character[index] === answer character
			if (solutionArray[index] === letter.key) {
				formattedGuess[index].color = "green";
				solutionArray[index] = null;
			}
		});

		// Find any yellow colors
		formattedGuess.forEach((letter, i) => {
			if (solutionArray.includes(letter.key) && letter.color !== "green") {
				formattedGuess[i].color = "yellow";
				solutionArray[solutionArray.indexOf(letter.key)] = null;
			}
		});

		// Return the array of letter objects and color
		return formattedGuess;
	};

	// Add a new guess to the guesses state
	// Update the isCorrect state if the guess is correct
	// Add one to the turn state
	const addNewGuess = (formattedGuess) => {
		if (currentGuess === solution) {
			setIsCorrect(true);
		}

		setGuesses((prevGuesses) => {
			let newGuesses = [...prevGuesses]; // Spread previous guesses
			newGuesses[turn] = formattedGuess;
			return newGuesses;
		});

		setHistory((prevHistory) => {
			return [...prevHistory, currentGuess];
		});

		setTurn((prevTurn) => {
			return prevTurn + 1;
		});

		// Change on-screen keyboard color
		setUsedKeys((prevUsedKeys) => {
			// Spread previous used keys to the object
			let newKeys = { ...prevUsedKeys };

			formattedGuess.forEach((letter) => {
				const currentColor = newKeys[letter.key];

				if (letter.color === "green") {
					newKeys[letter.key] = "green";
					return;
				}
				if (letter.color === "yellow" && currentColor !== "green") {
					newKeys[letter.key] = "yellow";
					return;
				}
				if (
					letter.color === "grey" &&
					currentColor !== "green" &&
					currentColor !== "yellow"
				) {
					newKeys[letter.key] = "grey";
					return;
				}
			});

			return newKeys;
		});

		setCurrentGuess(""); // Reset the guess
	};

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
			const formatted = formatGuess();
			addNewGuess(formatted);
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

	return { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp };
};

export default useWordle;
