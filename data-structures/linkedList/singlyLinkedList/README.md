# Singly Linked List

`SList` is a singly linked list implementation backed by `Node` objects. Each
node stores a value and a reference to the next node. The list maintains its
head node and element count, and supports iteration with `for...of`.

The source file defines `Node` and `SList` in the JavaScript environment where
it is loaded. It does not currently export them as CommonJS or ES modules.

## Usage

```js
const list = SList.fromArray([3, 1, 2]);

list.push_front(0);
list.push_back(4);
list.erase(1);

console.log(list.toArray()); // [0, 1, 2, 4]
console.log(list.size); // 4
console.log(list.front()); // 0
```

## API

### `new SList()`

Creates an empty list.

### `SList.fromArray(array)`

Creates a list containing the array values in their original order. A
non-array argument returns `undefined`.

### `push_front(value)` and `push_back(value)`

Add a value to the beginning or end of the list. `push_front` is O(1);
`push_back` traverses the list and is O(n).

### `pop_front()` and `pop_back()`

Remove the first or last node. Both methods return `undefined` when the list is
empty. `pop_front` is O(1); `pop_back` is O(n).

### `front()`

Returns the first value, or `undefined` for an empty list.

### `at(index)`

Returns the `Node` at a valid zero-based index, not the node's value. The node's
value is available through `.data`. An invalid index returns `undefined`.

```js
const node = list.at(1);
console.log(node.data);
console.log(node.next);
```

### `insert(index, value)`

Inserts a value before the node at an existing valid index. Invalid indices are
ignored. In particular, `insert(0, value)` works only for a non-empty list;
`insert(size, value)` is not an append operation and is ignored.

### `erase(index)`

Removes the node at a valid zero-based index. Invalid indices are ignored.

### `remove(value)`

Removes the first node whose value is strictly equal (`===`) to `value`.
If no matching value exists, the list is unchanged.

### `reverse()`

Reverses the links in place.

### `sort(compareFunction)`

Sorts the list in place using merge sort. If no comparator function is
provided, values are sorted with numeric ascending comparison (`a - b`).

### `toArray()`

Returns the list values as a regular array.

### `clear()`

Removes all nodes and resets `size` to `0`.

### `isEmpty()`

Returns `true` when the list has no elements; otherwise returns `false`.

### `size`

Getter for the stored element count. The class also exposes writable `head` and
`size` properties; changing them directly can break the list's internal
invariants and should generally be avoided.

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
| `push_front`, `pop_front`, `front`, `isEmpty` | O(1) |
| `push_back`, `pop_back` | O(n) |
| `at`, `insert`, `erase`, `remove` | O(n) |
| `reverse`, `toArray`, iteration | O(n) |
| `sort` | O(n log n) |
| `clear` | O(1) |

## Review notes

- The implementation is a working in-memory singly linked list with the
  operations documented above.
- `at()` returns a node object, unlike array-style accessors that return a
  value.
- `insert()` currently accepts only existing indices, so it cannot insert into
  an empty list or append at index `size`.
- There is currently no public `merge()` method in `SList`.
- `Node` and `SList` are not exported from the source file, so consumers must
  load the file in a shared JavaScript environment or add module exports before
  importing them.
