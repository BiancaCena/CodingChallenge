# Problem Set 1: Palindrome Pairs

## Problem Description

Given a list of unique words, find pairs of distinct indices where concatenating the words forms a palindrome. For example, with input ["bat", "tab", "cat"], output [[0, 1], [1, 0]] as ["battab", "tabbat"] are palindromes.

## Solution Overview

Created a method named 'palindromePairs' that handles the logic of finding the palindrome pairs. Within this method, it iterates through all combinations of pairs of words in the input array. Each concatenated strings are validated in the 'isPalindrome' method.

## Instructions to Run the Code

**A. Running Node.js Code with node**

Use the node command followed by the name of the JavaScript file:

```sh
node file_name.js
```

**B. Running C# Code with 'csc'**

To run the compiled executable file in cmd, use one of the following commands:

```sh
file_name
```

```sh
file_name.exe
```

You can also directly click the executable file to run it.

---
