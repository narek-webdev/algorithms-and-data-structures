Selection Sort

Description

Implement the Selection Sort algorithm to sort an array of numbers in ascending order.

Selection Sort works by repeatedly finding the smallest element from the unsorted portion of the array and placing it at the beginning of that portion.

After each iteration, one element is placed in its correct sorted position.

Function Signature

selectionSort(arr)

Parameters

* arr — an array of numbers to be sorted.

Return Value

* Returns the array sorted in ascending order.

Examples

selectionSort([64, 25, 12, 22, 11]);
// [11, 12, 22, 25, 64]
selectionSort([5, 3, 8, 1, 2]);
// [1, 2, 3, 5, 8]
selectionSort([9, 7, 5, 3, 1]);
// [1, 3, 5, 7, 9]
selectionSort([4, 2, 4, 1, 2]);
// [1, 2, 2, 4, 4]
selectionSort([-3, -10, 5, 0, -1]);
// [-10, -3, -1, 0, 5]
selectionSort([]);
// []

How It Works

1. Start from the first position of the array.
2. Assume the first element of the unsorted portion is the minimum.
3. Search through the remaining unsorted elements for a smaller value.
4. Keep track of the index of the smallest element found.
5. Swap the smallest element with the first element of the unsorted portion.
6. Move the starting position of the unsorted portion one position forward.
7. Repeat until the array is sorted.

Requirements

* Use the Selection Sort algorithm.
* Sort the array in ascending order.
* Find the minimum element in the unsorted portion on each iteration.
* Perform the sorting in place.
* Do not use built-in sorting methods such as sort.

Complexity

Time Complexity

* Best case: O(n²)
* Average case: O(n²)
* Worst case: O(n²)

Selection Sort always scans the remaining unsorted portion of the array to find the minimum element, even if the array is already sorted.

Space Complexity

* O(1)

Selection Sort operates in place and requires only a constant amount of additional memory.

Comparison

Algorithm	Best	Average	Worst	Space
Bubble Sort	O(n)*	O(n²)	O(n²)	O(1)
Selection Sort	O(n²)	O(n²)	O(n²)	O(1)
Insertion Sort	O(n)	O(n²)	O(n²)	O(1)

Note: Selection Sort performs O(n²) comparisons regardless of the initial order of the array, but requires at most O(n) swaps.

*Bubble Sort has a best-case complexity of O(n) when implemented with an early-exit optimization.