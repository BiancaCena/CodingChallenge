// A function for checking the string input
function isValid(input) {
	// Initialize variables needed
	var isValidParenthesis = false;
	const parentheses = { "(": ")", "{": "}", "[": "]" };
	// Contains the keys of parentheses
	const open = Object.keys(parentheses);
	// A variable for storing the previous open parenthesis
	previous = "";

	// If the length of the string is an odd number, return false.
	if (input.length % 2 != 0) return isValidParenthesis;

	//Loop through the string
	for (i = 0; i < input.length; i++) {
		// Get the current char in the given string.
		var character = input.charAt(i);

		//Check if character is an open parenthesis
		if (open.includes(character)) {
			previous = character;
			isValidParenthesis = true;
		} else {
			// Get the key (the open bracket) of the current character in string.
			keyOfCurrent = open.find((key) => parentheses[key] === character);

			// If previous length is zero or
			// If the previous length is more than zero and previous ch
			if (
				previous.length === 0 ||
				(previous.length > 0 && previous !== keyOfCurrent)
			) {
				isValidParenthesis = false;
				break;
			} else {
				isValidParenthesis = true;
			}
		}
	}

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
		if (input) console.log(isValid(input));
		rl.close();
	});
}

main();
