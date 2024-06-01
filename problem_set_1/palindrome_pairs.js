// A function for validating a string, returns a boolean
function isPalindrome(word) {
	for (let i = 0; i < word.length / 2; i++) {
		//Compares the characters starting from the outermost part of the word up to the center.
		if (word[i] !== word[word.length - 1 - i]) return false;
	}

	return true;
}

// A function for finding palindrome pairs, returns a nested array
function palindromePairs(words) {
	let result = [];

	for (let i = 0; i < words.length; i++) {
		//Start j with i + 1 to prevent comparing a word with itself
		for (let j = i + 1; j < words.length; j++) {
			const first = words[i] + words[j];
			const second = words[j] + words[i];

			// Check first combined word
			if (isPalindrome(first)) {
				result.push([i, j]);
			}

			// Check second combined word
			if (isPalindrome(second)) {
				result.push([j, i]);
			}
		}
	}

	return result;
}

// Main function
function main() {
	// let words = ["bat", "tab", "cat"];
	// console.log("Input: " + JSON.stringify(words));
	// // Check input
	// const result = palindromePairs(words);
	// console.log("Output: " + JSON.stringify(result));

	// - - - - - - - FOR MANUAL INPUT - - - - - - - //
	const readline = require("node:readline");
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	// Use a Set to store unique words
	let words = new Set();

	rl.question("Enter a list of words: ", (input) => {
		if (input.trim().length !== 0) {
			// Split the input and add unique words to the Set
			input.split(/\s+/).forEach((word) => {
				words.add(word);
			});

			// Convert Set back to an array
			words = Array.from(words);

			// Check input
			const result = palindromePairs(words);
			console.log("Output: " + JSON.stringify(result));
		}
		rl.close();
	});
}

// Run the program
main();
