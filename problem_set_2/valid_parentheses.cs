namespace Problem.Set.Two {
    using System;
    using System.Linq;
    using System.Collections.Generic;
    
    class ValidParentheses {
        // Declare the dictionary of pairs
        private static readonly Dictionary<char, char> PARENTHESES = new Dictionary<char, char>
        {
            {'(', ')'},
            {'[', ']'},
            {'{', '}'}
        };

        // A function for checking the string
        public static bool isValid(string input) {
            // If the length of the string is an odd number, return false.
	        if (input.Length % 2 != 0) return false;

            // A list for storing the previous characters in the given string
            Stack<char> list = new Stack<char>();
            foreach (char character in input)
            {
                if(PARENTHESES.ContainsKey(character)) {
                    // If character is an open parenthesis, add character to list
                    list.Push(character);
                } else if (PARENTHESES.ContainsValue(character)) {
                    // List is empty, first character is invalid (close parenthesis).
                    // Prevents InvalidOperationException when Pop() is used.
                    if(list.Count == 0) return false;

                    // If character is a close parenthesis, get previous element in list
                    char previousOpen = list.Pop();

                    // If value of previous Open parenthesis (previousOpen) and current close parenthesis (character) does not match.
                    if(PARENTHESES[previousOpen] != character) {
                        return false;
                    }

                } else {
                    // If the character is invalid (not an open or close parenthesis)
                    return false;
                }
            }

            // Return the output
	        return list.Count == 0;
        }

        // Main function
        static void Main(string[] args) {
            Console.WriteLine("Input: ");
            string input = Console.ReadLine();

            //Proceed only if input is not empty.
            if (!string.IsNullOrEmpty(input)) {
                bool result = isValid(input);
                Console.WriteLine("Output: " + result);
            }

            //Prevent the screen from closing until a key is pressed.
            Console.WriteLine("Press any key to exit...");
            Console.ReadKey();
        }
    }
}
