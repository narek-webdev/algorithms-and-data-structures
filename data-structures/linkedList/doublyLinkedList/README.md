# Doubly Linked List

`DList` is a doubly linked list implementation backed by `Node` objects. Each
node stores a value and references to both the next and previous nodes. The
list maintains its head, tail, and element count, and supports iteration with
`for...of`.

The source file defines `Node` and `DList` in the JavaScript environment where
it is loaded. It does not currently export them as CommonJS or ES modules.

## Usage

```js
const list = DList.fromArray([3, 1, 2]);

list.push_front(0);
list.push_back(4);
list.erase(1);

console.log(list.toArray()); // [0, 1, 2, 4]
console.log(list.size); // 4
console.log(list.front().data); // 0
console.log(list.back().data); // 4
```

## API

### `new DList()`

Creates an empty list.

### `DList.fromArray(array)`

Creates a list containing the array values in their original order. A
non-array argument returns `undefined`.

### `push_front(value)` and `push_back(value)`

Add a value to the beginning or end of the list. Both operations are O(1).

### `pop_front()` and `pop_back()`

Remove the first or last node. Both methods return `undefined` when the list is
empty and run in O(1) time.

### `front()` and `back()`

Return the first or last `Node`, or `null` for an empty list. A node's value is
available through `.data`; its neighboring nodes are available through `.next`
and `.prev`.

```js
const node = list.front();
console.log(node.data);
console.log(node.next);
console.log(node.prev); // null for the head node
```

### `at(index)`

Returns the `Node` at a valid zero-based index, not the node's value. The
method traverses from the head and returns `undefined` for an invalid index.

### `insert(index, value)`

Inserts a value before the node at `index`. Index `0` inserts at the front,
while `index === size` appends to the end. Invalid indices are ignored.

### `erase(index)`

Removes the node at a valid zero-based index. Invalid indices are ignored.

### `remove(value)`

Removes the first node whose value is strictly equal (`===`) to `value` and
returns the removed value. If no matching value exists, it returns `null`.

### `reverse()`

Reverses the links in place, updating both the head and tail.

### `sort(compareFunction)`

Sorts the list in place using merge sort. If no comparator function is
provided, values are sorted with numeric ascending comparison (`a - b`).

### `toArray()`

Returns the list values as a regular array in head-to-tail order.

### `clear()`

Removes all nodes and resets `size` to `0`.

### `isEmpty()`

Returns `true` when the list has no elements; otherwise returns `false`.

### `size`

Getter for the stored element count. The class also exposes writable `head`,
`tail`, and `size` properties; changing them directly can break the list's
internal invariants and should generally be avoided.

## Iteration

```js
for (const value of list) {
  console.log(value);
}
```

Iteration yields values in head-to-tail order.

## Complexity

| Operation | Time |
| --- | --- |
| `push_front`, `push_back`, `pop_front`, `pop_back`, `front`, `back`, `isEmpty` | O(1) |
| `at`, `insert`, `erase`, `remove` | O(n) |
| `reverse`, `toArray`, iteration | O(n) |
| `sort` | O(n log n) |
| `clear` | O(1) |

## Review notes

- `at()` returns a node object, unlike array-style accessors that return a
  value.
- Node links are maintained in both directions: the head's `prev` and the
  tail's `next` are `null`.
- `Node` and `DList` are not exported from the source file, so consumers must
  load the file in a shared JavaScript environment or add module exports before
  importing them.
