# Problem Set 3: Longest Increasing Subsequence

## Problem Description

Given an unsorted array of integers, find the length of the Longest Increasing Subsequence (LIS).

## Solution Overview

Created a method named 'lengthOfLIS' that handles the logic of finding the length of the Longest Increasing Subsequence (LIS) within an array of numbers. It compares the next elements to the last element of the sequence. If the lastElement is less than the next element, the count for the current sequence increments and is stored in the list 'listOfLengths'. At the end of the loop, the lis is found by getting the maximum number stored in 'listOfLengths'.

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
