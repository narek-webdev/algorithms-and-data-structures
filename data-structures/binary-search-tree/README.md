# Binary Search Tree

## Description

`BST` is a binary search tree that stores comparable values. Values smaller
than a node are stored in its left subtree, and values larger than a node are
stored in its right subtree.

The implementation provides iterative and recursive versions of insertion and
lookup. It also supports removal, minimum and maximum lookup, and the three
standard depth-first traversals.

Duplicate values are ignored.

## Usage

```js
const tree = new BST();

tree.insert(8).insert(3).insert(10).insert(1).insert(6);

tree.contains(6);
// true

tree.inOrderRecursive();
// [1, 3, 6, 8, 10]

tree.getMin();
// 1

tree.getMax();
// 10

tree.removeRecursive(3);

tree.inOrderRecursive();
// [1, 6, 8, 10]
```

`bst.js` defines `BST` and its internal `TreeNode` class. The file does not
currently export the class, so the example assumes the source has been loaded
in the same JavaScript scope.

## API

### `new BST()`

Creates an empty binary search tree.

### `insert(value)`

Inserts `value` using an iterative traversal and returns the tree instance,
which allows method chaining.

If `value` already exists in the tree, the tree is unchanged.

### `insertRecursive(value)`

Inserts `value` using recursion and returns the tree instance.

If `value` already exists in the tree, the tree is unchanged.

### `contains(value)`

Checks whether `value` exists using an iterative traversal. Returns `true` if
the value is present; otherwise, returns `false`.

### `containsRecursive(value)`

Checks whether `value` exists using recursion. Returns `true` if the value is
present; otherwise, returns `false`.

### `removeRecursive(value)`

Removes `value` using recursion and returns the tree instance.

Removal handles nodes with:

- No children
- Only a left child
- Only a right child
- Two children, using the in-order successor

If `value` is not present, the tree is unchanged.

### `getMin(node = root)`

Returns the smallest value in the tree, or `undefined` when the tree is empty.
The optional `node` argument is intended for internal subtree operations.

### `getMax(node = root)`

Returns the largest value in the tree, or `undefined` when the tree is empty.
The optional `node` argument is intended for internal subtree operations.

### `inOrderRecursive()`

Returns values in in-order traversal: left subtree, current node, right
subtree. For a binary search tree, the result is sorted in ascending order.

### `preOrderRecursive()`

Returns values in pre-order traversal: current node, left subtree, right
subtree.

### `postOrderRecursive()`

Returns values in post-order traversal: left subtree, right subtree, current
node.

## Complexity

Let `h` be the height of the tree and `n` be the number of stored values.

| Operation | Average time | Worst-case time | Extra space |
| --- | --- | --- | --- |
| `insert` | O(log n) | O(n) | O(1) |
| `insertRecursive` | O(log n) | O(n) | O(h) |
| `contains` | O(log n) | O(n) | O(1) |
| `containsRecursive` | O(log n) | O(n) | O(h) |
| `removeRecursive` | O(log n) | O(n) | O(h) |
| `getMin` | O(log n) | O(n) | O(1) |
| `getMax` | O(log n) | O(n) | O(1) |
| Each traversal | O(n) | O(n) | O(h) |

The average-case bounds assume the tree is reasonably balanced. Because this
is not a self-balancing tree, inserting already sorted values can produce a
linear chain and the worst-case bounds.
