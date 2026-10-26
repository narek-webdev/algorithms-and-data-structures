# Priority Queue

## Description

`PriorityQueue` is a binary-heap priority queue. By default, the smallest
value has the highest priority and is returned first. A custom comparison
function can be supplied to define a different priority order.

The heap is stored in an array. For an element at index `i`, its children are
at indexes `2 * i + 1` and `2 * i + 2`.

## Usage

```js
const queue = new PriorityQueue();

queue.push(5);
queue.push(1);
queue.push(3);

queue.peek();
// 1

queue.pop();
// 1

queue.pop();
// 3
```

To create a max-priority queue, provide a comparator that places larger values
first:

```js
const queue = new PriorityQueue((a, b) => b - a);

queue.push(5);
queue.push(1);
queue.push(3);

queue.pop();
// 5
```

For objects, the comparator should return a negative value when the first
argument has higher priority than the second:

```js
const queue = new PriorityQueue((a, b) => a.priority - b.priority);

queue.push({ name: "low", priority: 10 });
queue.push({ name: "high", priority: 1 });

queue.pop();
// { name: "high", priority: 1 }
```

## API

### `new PriorityQueue(compareFn)`

Creates an empty priority queue.

- `compareFn` is optional and defaults to `(a, b) => a - b`.
- The comparator must return a negative value when `a` should be removed
  before `b`, zero when they have equal priority, and a positive value when
  `a` should be removed after `b`.

### `push(value)`

Adds `value` to the queue and restores the heap property.

### `pop()`

Removes and returns the highest-priority value.

Returns `null` when the queue is empty.

### `peek()`

Returns the highest-priority value without removing it.

Returns `undefined` when the queue is empty.

### `size()`

Returns the number of values currently stored in the queue.

### `isEmpty()`

Returns `true` when the queue contains no values; otherwise, returns `false`.

### `getParent(i)`

Returns the parent index for the value at index `i`.

Throws an error when `i` is not a non-negative integer. The root's parent
index is `-1`.

### `getLeftChild(i)`

Returns the left-child index for the value at index `i`.

Throws an error when `i` is not a non-negative integer.

### `getRightChild(i)`

Returns the right-child index for the value at index `i`.

Throws an error when `i` is not a non-negative integer.

## Complexity

| Operation | Time | Space |
| --- | --- | --- |
| `push` | O(log n) | O(1) |
| `pop` | O(log n) | O(1) |
| `peek` | O(1) | O(1) |
| `size` | O(1) | O(1) |
| `isEmpty` | O(1) | O(1) |
| `getParent` | O(1) | O(1) |
| `getLeftChild` | O(1) | O(1) |
| `getRightChild` | O(1) | O(1) |

The queue uses O(n) space for its internal heap, where `n` is the number of
stored values.
