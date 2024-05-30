/*
Sample Given Input:
Input: [10, 9, 2, 5, 3, 7, 101, 18]
Corrent Answer: [2, 5, 7, 18]
Output: 4

 */

function lengthOfLIS(nums) {
	let finalSequences = nums.map((item) => [item]);
	let repeat = Math.floor(nums.length / 2) - 1;
	let count = 0;

	while (count < repeat) {
		finalSequences.forEach((element) => {
			let sequences = compare(nums, element);
			sequences.forEach((sequence) => {
				if (!arrayExistsInNestedArray(sequence, finalSequences))
					finalSequences.push(...sequences);
			});
		});
		count++;
	}
}

function compare(original, array) {
	// WIll store all the sequences that will be found.
	let sequences = [];

	// Get last index of array
	let lastIndex = array.length - 1;
	// Access last element of array
	let lastElement = array[lastIndex];
	// Determine the start of the loop
	let start = original.indexOf(lastElement) + 1;

	// console.log("CURRENT ARRAY IS " + JSON.stringify(array) + "\n");
	for (i = start; i < original.length; i++) {
		// Check if index of lastElement and original[i] are not the same
		// Compare the two values
		if (lastIndex !== i && lastElement < original[i]) {
			// Append the array and the current element to new array
			let newArray = [...array, original[i]];
			// Add new array to sequences
			if (newArray.length > 0) sequences.push(newArray);
		}
	}

	return sequences;
}

function arrayExistsInNestedArray(arr, nestedArr) {
	return nestedArr.some(
		(subArr) => JSON.stringify(subArr) === JSON.stringify(arr)
	);
}

// Main function
function main() {
	const readline = require("node:readline");

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	// Keep reading values until the condition is false
	console.log("Enter a list of numbers, Ctrl + C to stop.");
	rl.setPrompt("Input: ");
	rl.prompt();
	rl.on("line", function (line) {
		if (line && line.trim()) {
			const num = Number(line.trim());
			if (!isNaN(num)) {
				nums.push(num);
			}
		}
		rl.prompt();
	}).on("close", function () {
		if (nums && nums.length !== 0) {
			// Check input
			console.log(nums);
			const result = lengthOfLIS(nums);
		}
		process.exit(0);
	});
}

// Run the program
main();
