# Binary Search

## Description

Implement the Binary Search algorithm to find a target value in a sorted array.

The function should return the index of the target value if it exists in the array. If the target value is not found, it should return -1.

## Function Signature

```js
binarySearch(arr, target)
```

## Parameters

- `arr` — an array of numbers sorted in ascending order.
- `target` — the value to search for.

## Return Value

- Returns the index of `target` if it exists in the array.
- Returns `-1` if `target` is not found.

## Examples

```js
binarySearch([1, 3, 5, 7, 9, 11], 7);
// 3
binarySearch([2, 4, 6, 8, 10], 2);
// 0
binarySearch([2, 4, 6, 8, 10], 10);
// 4
binarySearch([1, 3, 5, 7, 9], 6);
// -1
binarySearch([], 10);
// -1
```

## Requirements

- Do not use built-in search methods such as `indexOf`, `findIndex`, or `includes`.
- Use the Binary Search algorithm.
- The input array must be sorted in ascending order.
- The expected time complexity is `O(log n)`.

## Complexity

### Time Complexity

- Best case: `O(1)`
- Average case: `O(log n)`
- Worst case: `O(log n)`

### Space Complexity

- `O(1)`