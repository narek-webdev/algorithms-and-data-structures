# Queue

## Description

`Queue` is a first-in, first-out (FIFO) data structure. The earliest added
element is the first element removed.

This implementation uses a fixed-capacity circular array. The default capacity
is `5`, but a different positive integer capacity can be supplied when the
queue is created.

## Usage

```js
const queue = new Queue(3);

queue.enqueue("first");
queue.enqueue("second");
queue.enqueue("third");

queue.get_front();
// "first"

queue.dequeue();
// "first"

queue.get_back();
// "third"

queue.size;
// 2
```

## API

### `new Queue(capacity = 5)`

Creates an empty queue with the specified maximum capacity.

If `capacity` is not a positive integer, the constructor throws an error:
`"cap is wrong"`.

### `enqueue(element)`

Adds `element` to the back of the queue.

If the queue has reached its capacity, `enqueue` throws an error:
`"Queue is full"`.

### `dequeue()`

Removes and returns the element at the front of the queue.

If the queue is empty, `dequeue` throws an error: `"Queue is empty"`.

### `size`

A getter that returns the number of elements currently stored in the queue.

### `get_front()`

Returns the element at the front of the queue without removing it.

If the queue is empty, it throws an error: `"Queue is empty"`.

### `get_back()`

Returns the element at the back of the queue without removing it.

If the queue is empty, it throws an error: `"Queue is empty"`.

### `isEmpty()`

Returns `true` when the queue contains no elements; otherwise, returns
`false`.

### `print()`

Logs each element to the console, starting at the front and proceeding toward
the back of the queue.

### Iteration

The queue is iterable. Iteration starts at the front and proceeds toward the
back:

```js
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

for (const element of queue) {
  console.log(element);
}
// 1
// 2
// 3
```

## Complexity

| Operation | Time | Space |
| --- | --- | --- |
| `enqueue` | O(1) | O(1) |
| `dequeue` | O(1) | O(1) |
| `get_front` | O(1) | O(1) |
| `get_back` | O(1) | O(1) |
| `size` | O(1) | O(1) |
| `isEmpty` | O(1) | O(1) |
| `print` | O(n) | O(1) |
| Iteration | O(n) | O(1) |

The queue allocates O(`capacity`) storage when it is created.
