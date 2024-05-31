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
            
            // Initialize the array of lists, with a list for each number
            List<int>[] arrayOfLists = new List<int>[numbers.Length];
            
            // Using c as the index, run a loop through the array of lists
            for (int c = 0; c < numbers.Length; c++)
            {	
            	// Add the first element for the current sublist
                arrayOfLists[c] = new List<int>();
                arrayOfLists[c].Add(numbers[c]);
                
                // Get the element of current child list
                // lastElement refers to the last element pushed to the child list
                int lastElement = numbers[c];
                
                // Using n as the index, run a loop through the numbers array
                // Start n with the value of c
                for (int n = c; n < numbers.Length; n++)
                {
                    if (lastElement < numbers[n])
                    {
                        // Add element to child list
                        arrayOfLists[c].Add(numbers[n]); 
                        // Update the current element of the child list
                        lastElement = numbers[n];
                    }
                }

                // Update the lis
                lis = Math.Max(lis, arrayOfLists[c].Count);
                
            }
            
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
            Console.WriteLine("Output: " + result);

            //Prevent the screen from closing until a key is pressed.
            Console.WriteLine("Press any key to exit...");
            Console.ReadKey();
        }
    }
}