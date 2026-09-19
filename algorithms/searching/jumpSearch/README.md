Jump Search

Description

Implement the Jump Search algorithm to find a target value in a sorted array.

Jump Search works by jumping ahead by fixed-size blocks instead of checking every element one by one. Once the block that may contain the target is found, a linear search is performed within that block.

The optimal jump size is approximately √n, where n is the length of the array.

Function Signature

jumpSearch(arr, target)

Parameters

* arr — an array of numbers sorted in ascending order.
* target — the value to search for.

Return Value

* Returns the index of target if it exists in the array.
* Returns -1 if the target is not found.

Examples

jumpSearch([1, 3, 5, 7, 9, 11, 13, 15, 17], 11);
// 5
jumpSearch([2, 4, 6, 8, 10, 12, 14, 16], 2);
// 0
jumpSearch([2, 4, 6, 8, 10, 12, 14, 16], 16);
// 7
jumpSearch([1, 5, 10, 15, 20, 25, 30, 35, 40], 17);
// -1
jumpSearch([], 5);
// -1

How It Works

1. Calculate the jump size using √n.
2. Jump through the array block by block.
3. Stop when the current value is greater than or equal to the target.
4. Perform a linear search within the identified block.
5. Return the target’s index if found.
6. Return -1 if the target does not exist.

Requirements

* The input array must be sorted in ascending order.
* Use the Jump Search algorithm.
* The jump size should be based on √n.
* Do not use built-in search methods such as indexOf, findIndex, or includes.

Complexity

Time Complexity

* Best case: O(1)
* Average case: O(√n)
* Worst case: O(√n)

Space Complexity

* O(1)

Comparison

Algorithm	Best	Average	Worst	Space
Linear Search	O(1)	O(n)	O(n)	O(1)
Jump Search	O(1)	O(√n)	O(√n)	O(1)
Binary Search	O(1)	O(log n)	O(log n)	O(1)

Note: Jump Search requires a sorted array.