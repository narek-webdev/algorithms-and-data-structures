Quick Sort

Description

Implement the Quick Sort algorithm to sort an array of numbers in ascending order.

Quick Sort selects a pivot, partitions the array around the pivot, and recursively sorts the elements on either side of the pivot.

Function Signature

quickSort(arr)

Parameters

* arr — an array of numbers to be sorted in ascending order.

Return Value

* Returns the array sorted in ascending order.
* Returns an empty array if the input array is empty.

Examples

quickSort([5, 3, 8, 1, 2]);
// [1, 2, 3, 5, 8]
quickSort([10, -2, 0, 7, 3]);
// [-2, 0, 3, 7, 10]
quickSort([4, 4, 2, 9, 2]);
// [2, 2, 4, 4, 9]
quickSort([1, 2, 3, 4, 5]);
// [1, 2, 3, 4, 5]
quickSort([7]);
// [7]
quickSort([]);
// []

How It Works

1. Choose the first element of the current portion as the pivot.
2. Move two pointers inward while comparing elements with the pivot.
3. Swap elements that are on the wrong side of the pivot.
4. Place the pivot in its final sorted position.
5. Recursively sort the portions to the left and right of the pivot.
6. Return the array after all portions have been sorted.

Requirements

* Use the Quick Sort algorithm.
* Sort the array in ascending order.
* Sort the array in place.
* Do not use the built-in sort() method.
* The array may contain duplicate values.
* The array may contain positive numbers, negative numbers, and zero.

Complexity

Time Complexity

* Best case: O(n log n)
* Average case: O(n log n)
* Worst case: O(n²)

The worst case occurs when the first element repeatedly produces highly unbalanced partitions, such as for an already sorted array.

Space Complexity

* Average case: O(log n)
* Worst case: O(n)

Quick Sort sorts the array in place, but recursive calls require stack space.

Comparison

Algorithm\tBest\tAverage\tWorst\tSpace
Quick Sort\tO(n log n)\tO(n log n)\tO(n²)\tO(log n) average
Merge Sort\tO(n log n)\tO(n log n)\tO(n log n)\tO(n)
Bubble Sort\tO(n)*\tO(n²)\tO(n²)\tO(1)
Selection Sort\tO(n²)\tO(n²)\tO(n²)\tO(1)
Insertion Sort\tO(n)\tO(n²)\tO(n²)\tO(1)

Note: Quick Sort's worst-case stack space is O(n) when the partitions are completely unbalanced.

*Bubble Sort has a best-case complexity of O(n) when implemented with an early-exit optimization.