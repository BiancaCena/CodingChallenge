function lengthOfLIS(numbers) {
	let lis = 0;

	if (numbers.length === 0) return lis;

	// Create an array for each number
	let nestedArray = [];
	// let nestedArray = numbers.map((item) => [item]);
	// let lis = 0;

	// Using c as the index, run a loop through the nested array
	for (let c = 0; c < numbers.length; c++) {
		//Initialize the subArray with the current number
		let subArray = [numbers[c]];

		// Get the element of current child array
		// lastElement refers to the last element pushed to the child array
		let lastElement = subArray[subArray.length - 1];

		// Using n as the index, run a loop through the numbers array
		// Start n with the value of c
		for (let n = c; n < numbers.length; n++) {
			if (lastElement < numbers[n]) {
				// Add element to child array
				subArray.push(numbers[n]);
				// Update the current element of the child array
				lastElement = numbers[n];
			}
		}

		// Insert list to nested array
		nestedArray.push(subArray);

		// Update the lis
		if (subArray.length > lis)
			// Update lis
			lis = Math.max(lis, subArray.length);
	}

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
		console.log("Output: " + result);
		process.exit(0);
	});
}

// Run the program
main();
