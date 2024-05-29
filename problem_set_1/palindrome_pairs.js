// A function for validating a string, returns a boolean
function isPalindrome(word) {
	for (
		let leftChar = 0, rightChar = word.length - 1;
		leftChar < rightChar;
		leftChar++, rightChar--
	) {
		if (word[leftChar] !== word[rightChar]) return false;
	}
	return true;
}

// A function for finding palindrome pairs, returns a nested array
function palindromePairs(words) {
	let result = [];

	for (let i = 0; i < words.length; i++) {
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
	const readline = require("node:readline");

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	let words = [];
	rl.question("Input: ", (input) => {
		if (input.trim().length !== 0) {
			//Split the input and assign it to words
			words = input.split(/\s+/);

			// Check input
			const result = palindromePairs(words);
			console.log("Output: " + JSON.stringify(result));
		}
		rl.close();
	});
}

// Run the program
main();
