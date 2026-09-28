Merge Sort

Description

Implement the Merge Sort algorithm to sort an array of numbers in ascending order.

Merge Sort recursively divides the array into smaller subarrays until each subarray contains one element. It then merges the subarrays back together in sorted order.

Function Signature

mergeSort(arr)

Parameters

* arr — an array of numbers to be sorted in ascending order.

Return Value

* Returns the array sorted in ascending order.
* Returns an empty array if the input array is empty.

Examples

mergeSort([5, 3, 8, 1, 2]);
// [1, 2, 3, 5, 8]
mergeSort([10, -2, 0, 7, 3]);
// [-2, 0, 3, 7, 10]
mergeSort([4, 4, 2, 9, 2]);
// [2, 2, 4, 4, 9]
mergeSort([1, 2, 3, 4, 5]);
// [1, 2, 3, 4, 5]
mergeSort([7]);
// [7]
mergeSort([]);
// []

How It Works

1. Divide the array into two halves.
2. Recursively divide each half until every subarray contains one element.
3. Compare the first unmerged elements from the left and right subarrays.
4. Add the smaller element to a temporary result array.
5. Add any remaining elements from either subarray to the result.
6. Copy the merged result back into the corresponding portion of the original array.
7. Continue merging until the entire array is sorted.

Requirements

* Use the Merge Sort algorithm.
* Sort the array in ascending order.
* Sort the array in place.
* Do not use the built-in sort() method.
* The array may contain duplicate values.
* The array may contain positive numbers, negative numbers, and zero.

Complexity

Time Complexity

* Best case: O(n log n)
* Average case: O(n log n)
* Worst case: O(n log n)

Space Complexity

* O(n)

Merge Sort requires additional space for the temporary arrays used while merging.

Comparison

Algorithm\tBest\tAverage\tWorst\tSpace
Merge Sort\tO(n log n)\tO(n log n)\tO(n log n)\tO(n)
Bubble Sort\tO(n)*\tO(n²)\tO(n²)\tO(1)
Selection Sort\tO(n²)\tO(n²)\tO(n²)\tO(1)
Insertion Sort\tO(n)\tO(n²)\tO(n²)\tO(1)

Note: Merge Sort maintains O(n log n) time complexity regardless of the initial order of the array.

*Bubble Sort has a best-case complexity of O(n) when implemented with an early-exit optimization.
