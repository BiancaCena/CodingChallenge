// A function for checking the string input
function isValid(input) {
	// Initialize variables needed

	var isValidParenthesis = false;
	const parentheses = { "(": ")", "{": "}", "[": "]" };
	// Contains the keys or open parentheses
	const open = Object.keys(parentheses);
	// Contains the values or close parentheses
	const close = Object.values(parentheses);
	// A list for storing the previous characters in the given string
	var list = [];
	var i = 0; // for the loop

	// If the length of the string is an odd number, return false.
	if (input.length % 2 !== 0) return isValidParenthesis;

	// Loop through the given string
	do {
		// Get the current char in the given string.
		var character = input.charAt(i);

		if (open.includes(character)) {
			// If character is an open parenthesis, add character to list
			list.push(character);
			isValidParenthesis = true;
		} else if (close.includes(character)) {
			// If character is a close parenthesis
			// Get previous element in list
			previous = list.pop();

			if (previous === undefined) isValidParenthesis = false; //Stop the loop as the first character is invalid (close parenthesis).

			// Get the pair of the current character
			pair = open.find((key) => parentheses[key] === character);
			// Compare the previous character and the pair of current character.
			if (previous !== pair) {
				isValidParenthesis = false;
			} else {
				isValidParenthesis = true;
			}
		} else {
			// If the character is invalid (not an open or close parenthesis)
			isValidParenthesis = false;
		}

		i++;

		// Continue while isValidParenthesis is true and i is less than total length
	} while (isValidParenthesis && i < input.length);

	// Return the output
	return isValidParenthesis;
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
			result = isValid(input);
			console.log("Output: " + result);
		}
		rl.close();
	});
}

// Run the program
main();
