# Counting Sort

## Description

Implement the Counting Sort algorithm to sort an array of numbers in ascending order.

Counting Sort counts how many times each value occurs, then rebuilds the sorted array from those counts. This implementation supports positive numbers, negative numbers, zero, and duplicate values.

## Function Signature

```js
countingSort(arr)
```

## Parameters

- `arr` - an array of numbers to be sorted in ascending order.

## Return Value

- Returns a new array sorted in ascending order.
- Returns the input array unchanged when it contains zero or one element.

## Examples

```js
countingSort([5, 3, 8, 1, 2]);
// [1, 2, 3, 5, 8]
countingSort([10, -2, 0, 7, 3]);
// [-2, 0, 3, 7, 10]
countingSort([4, 4, 2, 9, 2]);
// [2, 2, 4, 4, 9]
countingSort([1, 2, 3, 4, 5]);
// [1, 2, 3, 4, 5]
countingSort([7]);
// [7]
countingSort([]);
// []
```

## How It Works

1. Find the minimum and maximum values in the input array.
2. Create a count array with one position for every value in that range.
3. Count each input value at the position `value - min`.
4. Traverse the count array from left to right.
5. Add each value to the result as many times as it was counted.
6. Return the reconstructed sorted array.

## Requirements

- Use the Counting Sort algorithm.
- Sort the array in ascending order.
- Do not use the built-in `sort()` method.
- The array may contain duplicate values.
- The array may contain positive numbers, negative numbers, and zero.
- Input values should be integers.

## Complexity

### Time Complexity

- Best case: `O(n + k)`
- Average case: `O(n + k)`
- Worst case: `O(n + k)`

Here, `n` is the number of elements and `k` is the range from the minimum to maximum value.

### Space Complexity

- `O(n + k)` for the count array and the returned result.

Counting Sort is efficient when the value range is reasonably small compared with the number of elements. A very large range can require substantial memory even when the input array is small.
