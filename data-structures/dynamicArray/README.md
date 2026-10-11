# DynamicArray

A `DynamicArray` is a resizable array implementation that stores integers in a compact internal buffer and automatically grows when it reaches capacity.

This implementation uses a fixed-size backing `Int32Array` and doubles its capacity whenever the array needs more space, which makes it efficient for frequent append operations while keeping memory usage predictable.

## Features

- Automatic resizing when the array reaches capacity
- Indexed access with bounds checks
- Push, pop, insert, erase, and swap operations
- Supports iteration via `for...of` and custom iterator methods
- Functional helpers such as `map`, `filter`, `reduce`, `some`, `find`, and `findIndex`
- Integer-only validation for values and indices

## Example

```js
const arr = new DynamicArray(2);

arr.push_back(10);
arr.push_back(20);
arr.push_back(30); // triggers resize

console.log(arr.front()); // 10
console.log(arr.back()); // 30
console.log(arr.at(1)); // 20

arr.insert(1, 15);
console.log([...arr.values()]); // [10, 15, 20, 30]

arr.erase(2);
console.log([...arr.values()]); // [10, 15, 30]
```

This example assumes the `DynamicArray` class is available in the current JavaScript environment (for example, after importing or loading the file that defines it).

## Constructor

```js
new DynamicArray(capacity)
```

- `capacity`: a positive integer that sets the initial size of the internal storage
- Throws an error if the capacity is not a valid positive integer

## Common operations

### `push_back(value)`
Adds a new integer at the end of the array.

- Throws if `value` is not an integer
- Resizes automatically if the array is full

### `pop_back()`
Removes and returns the last element.

- Throws if the array is empty

### `at(index)`
Returns the value at the specified index.

- Throws if the index is invalid

### `set(index, value)`
Updates an element at a given index.

### `front()`
Returns the first element.

### `back()`
Returns the last element.

### `erase(pos)`
Removes the element at position `pos` and shifts the remaining elements left.

### `insert(pos, value)`
Inserts a value at a specific index and shifts following items right.

### `swap(i, j)`
Swaps two elements in the array.

## Iteration

The array supports iteration through its iterator:

```js
for (const value of arr) {
  console.log(value);
}
```

It also exposes:

- `values()`
- `keys()`
- `forEach(fn)`
- `map(fn)`
- `filter(fn)`
- `reduce(fn, initialValue)`
- `some(fn)`
- `find(fn)`
- `findIndex(fn)`
- `includes(value)`

## Time complexity

Typical dynamic-array operations:

- `push_back`: amortized O(1)
- `pop_back`: O(1)
- `at`, `set`, `front`, `back`: O(1)
- `insert`, `erase`: O(n)
- `swap`: O(1)
- `map`, `filter`, `reduce`, `some`, etc.: O(n)

## Notes

This implementation is optimized for integer data and uses `Int32Array` for efficient storage. If you need to store non-integer values, this data structure would need to be generalized or replaced with a different array type.
