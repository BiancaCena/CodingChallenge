namespace Problem.Set.Three
{
	using System;
    using System.Linq;
    using System.Collections.Generic;
    
    class LIS
    {
        static int lengthOfLIS(int[] numbers) {
        	int lis = 0;
            
        	if (numbers.Length == 0) return lis;
            
            // This will store the lengths of each sequence found in the loop
            List<int> listOfLengths = new List<int>();
            
            // Using c as the index, run a loop through the array of lists
            for (int c = 0; c < numbers.Length; c++)
            {	
                // Set the lastElement to the current element.
                // lastElement refers to the last element of the sequence.
                int lastElement = numbers[c];

                // Initialize a variable responsible for counting the length of sequence.
                // Add 1 as the default.
                int count = 1;
                
                // Using n as the index, run a loop through the numbers array
                // Start n with the value of c
                for (int n = c; n < numbers.Length; n++)
                {
                    if (lastElement < numbers[n])
                    {
                        // Increment the count
                        count++;
                        // Update the lastElement to the current element (numbers[n])
                        lastElement = numbers[n];
                    }
                }

                // Store the length to the list
                listOfLengths.Add(count);
            }

            // Compare and find the Longest Increasing Subsequence
            lis = listOfLengths.Max();
            
            return lis;
        }

        static void Main(string[] args)
        {
            // int[] numbers = new int[]  { 10, 9, 2, 5, 3, 7, 101, 18};
            // string formattedArray = "[" + string.Join(", ", numbers) + "]";
            // Console.WriteLine("Input: " + formattedArray);

            // int result = lengthOfLIS(numbers);
            // Console.WriteLine("Output: " + result);

            // - - - - - - - FOR MANUAL INPUT - - - - - - - //
            // Keep reading values until the condition is false
            Console.WriteLine("Enter a list of numbers, type a non-number value to stop.");
            List<int> numbers = new List<int>();

            int number;
            string input = Console.ReadLine();
            while(int.TryParse(input, out number))
            {
                numbers.Add(number);
                input = Console.ReadLine();
            };

            int result = lengthOfLIS(numbers.ToArray());
            
            string formattedArray = "[" + string.Join(", ", numbers) + "]";
            Console.WriteLine("\n\nInput: " + formattedArray);
            Console.WriteLine("Output: " + result);

            //Prevent the screen from closing until a key is pressed.
            Console.WriteLine("Press any key to exit...");
            Console.ReadKey();
        }
    }
}