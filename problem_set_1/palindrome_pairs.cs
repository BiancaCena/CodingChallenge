using System;
using System.Linq;
using System.Collections.Generic;

namespace Problem.Set.Two {
    class PalindromePairs {
        public static bool isPalindrome(string word) {
            for (int i = 0; i < word.Length / 2; i++) {
                if (word[i] != word[word.Length - 1 - i]) return false;
            }

            return true;
        }

        public static int[][] palindromePairs(string[] words) {
            List<int[]> result = new List<int[]>();

            for (int i = 0; i < words.Length; i++) {
                for (int j = i + 1; j < words.Length; j++) {
                    string first = words[i] + words[j];
                    string second = words[j] + words[i];

                    // Check first combined word
                    if (isPalindrome(first)) {
                        result.Add(new int[] { i, j });
                    }

                    // Check second combined word
                    if (isPalindrome(second)) {
                        result.Add(new int[] { j, i });
                    }
                }
            }

            return result.ToArray();
        }

        static void Main(string[] args) {
            Console.WriteLine("Input: ");
            string input = Console.ReadLine().Trim();

            //Proceed only if input is not empty.
            if (!string.IsNullOrWhiteSpace(input)) {
                //Split the input based on space
                string[] words = input.Split(
                    new char[] { ' ' }, 
                    StringSplitOptions.RemoveEmptyEntries);

                // Check input
                int[][] result = palindromePairs(words);

                // Format the output as nested arrays
                Console.Write("Output: [");
                for (int i = 0; i < result.Length; i++)
                {
                    Console.Write("[");
                    Console.Write(string.Join(", ", result[i]));
                    Console.Write("]");
                    if (i < result.Length - 1)
                    {
                        Console.Write(",");
                    }
                }
                Console.WriteLine("]");
            }

            //Prevent the screen from closing until a key is pressed.
            Console.WriteLine("Press any key to exit...");
            Console.ReadKey();
        }
    }
}
