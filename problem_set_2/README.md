# Problem Set 2: Valid Parentheses

## Problem Description

To determine the validity of a string composed of parentheses, curly braces, and square brackets, ensure that each opening bracket is correctly closed by the same type of bracket and in the correct order.

## Solution Overview

Created a method named 'isValid' that takes a string input and returns a boolean indicating whether the string contains a valid arrangement of parentheses, curly braces, and square brackets. It iterates through each character in the input string, pushing opening brackets onto the list and popping the last opening bracket when encountering a closing bracket. The string is valid if the length of the list remains zero.

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
