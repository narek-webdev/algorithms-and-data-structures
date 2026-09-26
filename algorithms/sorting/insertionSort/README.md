Insertion Sort

Description

Implement the Insertion Sort algorithm to sort an array of numbers in ascending order.

Insertion Sort builds the sorted portion of the array one element at a time. Each new element is compared with the elements before it and inserted into its correct position by shifting larger elements to the right.

Function Signature

insertionSort(arr)

Parameters

* arr — an array of numbers to be sorted in ascending order.

Return Value

* Returns the array sorted in ascending order.
* Returns an empty array if the input array is empty.

Examples

insertionSort([5, 3, 8, 1, 2]);
// [1, 2, 3, 5, 8]
insertionSort([10, -2, 0, 7, 3]);
// [-2, 0, 3, 7, 10]
insertionSort([4, 4, 2, 9, 2]);
// [2, 2, 4, 4, 9]
insertionSort([1, 2, 3, 4, 5]);
// [1, 2, 3, 4, 5]
insertionSort([7]);
// [7]
insertionSort([]);
// []

How It Works

1. Treat the first element as a sorted portion of the array.
2. Select the next element as the key to insert.
3. Compare the key with the elements in the sorted portion from right to left.
4. Shift any element larger than the key one position to the right.
5. Insert the key into the position where all preceding elements are smaller or equal.
6. Repeat until every element is in the sorted portion.

Requirements

* Use the Insertion Sort algorithm.
* Sort the array in ascending order.
* Sort the array in place.
* Do not use the built-in sort() method.
* The array may contain duplicate values.
* The array may contain positive numbers, negative numbers, and zero.

Complexity

Time Complexity

* Best case: O(n)
* Average case: O(n²)
* Worst case: O(n²)

Space Complexity

* O(1)

Insertion Sort operates in place and requires only a constant amount of additional memory.

Comparison

Algorithm	Best	Average	Worst	Space
Bubble Sort	O(n)*	O(n²)	O(n²)	O(1)
Selection Sort	O(n²)	O(n²)	O(n²)	O(1)
Insertion Sort	O(n)	O(n²)	O(n²)	O(1)

Note: Insertion Sort has a best-case complexity of O(n) when the array is already sorted because each element is compared once and no shifts are needed.

*Bubble Sort has a best-case complexity of O(n) when implemented with an early-exit optimization.