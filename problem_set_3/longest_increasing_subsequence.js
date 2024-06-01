function lengthOfLIS(numbers) {
	let lis = 0;

	if (numbers.length === 0) return lis;

	// This will store the lengths of each sequence found in the loop
	let listOfLengths = [];

	// Using c as the index, run a loop through the nested array
	for (let c = 0; c < numbers.length; c++) {
		// Set the lastElement to the current element.
		// lastElement refers to the last element of the sequence.
		let lastElement = numbers[c];

		// Initialize a variable responsible for counting the length of sequence.
		// Add 1 as the default.
		let count = 1;

		// Using n as the index, run a loop through the numbers array
		// Start n with the value of c
		for (let n = c; n < numbers.length; n++) {
			if (lastElement < numbers[n]) {
				// Increment the count
				count++;
				// Update the lastElement to the current element (numbers[n])
				lastElement = numbers[n];
			}
		}

		// Store the length to the list
		listOfLengths.push(count);
	}

	// Compare and find the Longest Increasing Subsequence
	lis = Math.max(...listOfLengths);

	return lis;
}

// Main function
function main() {
	// let numbers = [10, 9, 2, 5, 3, 7, 101, 18];
	// console.log("Input: " + numbers);
	// const result = lengthOfLIS(numbers);
	// console.log("Output: " + result);

	// - - - - - - - FOR MANUAL INPUT - - - - - - - //
	const readline = require("node:readline");
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	let numbers = [];

	// Keep reading values until the condition is false
	console.log("Enter a list of numbers, Ctrl + C to stop.");
	rl.setPrompt("Input: ");
	rl.prompt();
	rl.on("line", function (line) {
		const number = Number(line.trim());

		if (Number(number)) {
			numbers.push(number);
		} else {
			console.log("Invalid");
		}

		rl.prompt();
	}).on("close", function () {
		const result = lengthOfLIS(numbers);

		console.log("\n\nInput: " + JSON.stringify(numbers));
		console.log("Output: " + result);
		process.exit(0);
	});
}

// Run the program
main();
