Bubble Sort

Description

Implement the Bubble Sort algorithm to sort an array of numbers in ascending order.

Bubble Sort works by repeatedly comparing adjacent elements and swapping them if they are in the wrong order. After each pass through the array, the largest unsorted element moves to its correct position.

The algorithm can stop early if no swaps are performed during a pass, since this means the array is already sorted.

Function Signature

bubbleSort(arr)

Parameters

* arr — an array of numbers to be sorted in ascending order.

Return Value

* Returns the array sorted in ascending order.
* Returns an empty array if the input array is empty.

Examples

bubbleSort([5, 3, 8, 1, 2]);
// [1, 2, 3, 5, 8]
bubbleSort([10, -2, 0, 7, 3]);
// [-2, 0, 3, 7, 10]
bubbleSort([4, 4, 2, 9, 2]);
// [2, 2, 4, 4, 9]
bubbleSort([1, 2, 3, 4, 5]);
// [1, 2, 3, 4, 5]
bubbleSort([7]);
// [7]
bubbleSort([]);
// []

How It Works

1. Compare adjacent elements in the array.
2. Swap them if the left element is greater than the right element.
3. Continue comparing adjacent elements until the end of the unsorted portion of the array.
4. After each pass, the largest remaining unsorted element is placed in its correct position.
5. Repeat the process for the remaining unsorted elements.
6. If a complete pass occurs without any swaps, stop early because the array is already sorted.

Requirements

* Sort the array in ascending order.
* Use the Bubble Sort algorithm.
* Do not use the built-in sort() method.
* The array may contain duplicate values.
* The array may contain positive numbers, negative numbers, and zero.
* Stop early if the array becomes sorted before all passes are completed.

Complexity

Time Complexity

* Best case: O(n)
* Average case: O(n²)
* Worst case: O(n²)

Space Complexity

* O(1)

Comparison

Algorithm	Best	Average	Worst	Space
Bubble Sort	O(n)	O(n²)	O(n²)	O(1)
Selection Sort	O(n²)	O(n²)	O(n²)	O(1)
Insertion Sort	O(n)	O(n²)	O(n²)	O(1)

Note: The O(n) best-case complexity assumes the optimized version of Bubble Sort that stops when a complete pass performs no swaps.