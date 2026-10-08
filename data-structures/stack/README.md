# Stack

## Description

`Stack` is a last-in, first-out (LIFO) data structure. The most recently
added element is the first element removed.

This implementation uses a fixed-capacity array. The default capacity is `5`,
but a different capacity can be supplied when the stack is created.

## Usage

```js
const stack = new Stack(3);

stack.push("first");
stack.push("second");
stack.push("third");

stack.top;
// "third"

stack.pop();
// "third"

stack.size();
// 2
```

## API

### `new Stack(initialCapacity = 5)`

Creates an empty stack with the specified maximum capacity.

### `push(element)`

Adds `element` to the top of the stack.

If the stack has reached its capacity, `push` throws an error:
`"Maximum call stack size exceeded"`.

### `pop()`

Removes and returns the element at the top of the stack.

If the stack is empty, it returns `"stack is empty"`.

### `top`

A getter that returns the element at the top of the stack without removing it.
It returns `undefined` when the stack is empty.

### `size()`

Returns the number of elements currently stored in the stack.

### `isEmpty()`

Returns `true` when the stack contains no elements; otherwise, returns
`false`.

### `clear()`

Removes all elements from the stack. The stack's configured capacity is
unchanged.

### Iteration

The stack is iterable. Iteration starts at the top and proceeds toward the
bottom:

```js
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

for (const element of stack) {
  console.log(element);
}
// 3
// 2
// 1
```

## Complexity

| Operation | Time | Space |
| --- | --- | --- |
| `push` | O(1) | O(1) |
| `pop` | O(1) | O(1) |
| `top` | O(1) | O(1) |
| `size` | O(1) | O(1) |
| `isEmpty` | O(1) | O(1) |
| `clear` | O(1) | O(1) |
| Iteration | O(n) | O(1) |

The stack allocates O(`initialCapacity`) storage when it is created.
