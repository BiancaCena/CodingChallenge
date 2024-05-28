// A function for validating a string, returns a boolean
function isPalindrome(word) {
	let reversedWord = "";
	for (let character of word) {
		// Insert character on the first part of the reversedWord
		reversedWord = character + reversedWord;
	}
	// Check if it is a palindrome.
	return word === reversedWord;
}

// A function for finding palindrome pairs, returns a [][]int
function palindromePairs(words) {
	let palindromes = [];

	// Loop through the array
	for (let i = 0; i < words.length; i++) {
		for (let j = words.length - 1; j >= 0; j--) {
			// Check both words are not the same.
			if (words[i] !== words[j]) {
				let combinedWord = words[i] + words[j];
				// Check combinedWord
				if (isPalindrome(combinedWord)) {
					palindromes.push([i, j]);
				}
			}
		}
	}

	return palindromes;
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
		//Split the string into substrings and assign it to words
		words = input.trim().split(" ");
		console.log(words);

		//Proceed only if input is not empty.
		if (words && words.length > 0) {
			// Check input
			result = palindromePairs(words);
			console.log(result);
		}
		rl.close();
	});
}

// Run the program
main();
