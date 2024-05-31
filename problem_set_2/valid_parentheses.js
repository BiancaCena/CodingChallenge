const PARENTHESES = {
	"(": ")",
	"[": "]",
	"{": "}",
};
const OPEN_PARENTHESES = Object.keys(PARENTHESES);
const CLOSE_PARENTHESES = Object.values(PARENTHESES);

// A function for checking the string input
function isValid(input) {
	// If the length of the string is an odd number, return false.
	if (input.length % 2 !== 0) return false;

	// A list for storing the previous characters in the given string
	var list = [];
	for (let character of input) {
		if (OPEN_PARENTHESES.includes(character)) {
			// If character is an open parenthesis, add character to list
			list.push(character);
		} else if (CLOSE_PARENTHESES.includes(character)) {
			// If character is a close parenthesis, get previous element in list
			let previousOpen = list.pop();

			/* Returns false if
			- previousOpen is undefined, first character is invalid (close parenthesis).
			- Value of previous Open parenthesis (previousOpen) and current close parenthesis (character) does not match.
			 */
			if (!previousOpen || PARENTHESES[previousOpen] !== character) {
				return false;
			}
		} else {
			// If the character is invalid (not an open or close parenthesis)
			return false;
		}
	}

	// Return the output
	return list.length === 0;
}

// Main function
function main() {
	const readline = require("node:readline");
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	rl.question("Input: ", (input) => {
		//Proceed only if input is not empty.
		if (input && input.length > 0) {
			let result = isValid(input);
			console.log("Output: " + result);
		}
		rl.close();
	});
}

// Run the program
main();
