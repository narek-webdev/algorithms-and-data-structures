# Recursive Binary Search Tree

## Description

`BST` is a binary search tree that stores comparable values. Values smaller
than a node are stored in its left subtree, and values larger than a node are
stored in its right subtree.

This implementation uses recursion for insertion, lookup, removal, and
traversal. Duplicate values are ignored.

## Usage

```js
const tree = new BST();

tree.insertRecursive(8);
tree.insertRecursive(3);
tree.insertRecursive(10);
tree.insertRecursive(1);
tree.insertRecursive(6);

tree.containsRecursive(6);
// true

tree.inOrderRecursive();
// [1, 3, 6, 8, 10]

tree.levelOrderRecursive();
// [8, 3, 10, 1, 6]

tree.removeRecursive(3);

tree.inOrderRecursive();
// [1, 6, 8, 10]
```

`recursive-bst.js` defines `BST` and its internal `TreeNode` class. The file
does not currently export the class, so the example assumes the source has
been loaded in the same JavaScript scope. `insertRecursive` and
`removeRecursive` update the tree in place and do not return the tree.

## API

### `new BST()`

Creates an empty binary search tree.

### `insertRecursive(value)`

Recursively inserts `value` into the tree. If `value` already exists, the tree
is unchanged.

### `containsRecursive(value)`

Recursively checks whether `value` exists in the tree. Returns `true` when the
value is present and `false` otherwise.

### `removeRecursive(value)`

Recursively removes `value` from the tree. Removal handles nodes with no
children, one child, or two children. For a node with two children, the
in-order successor from the right subtree replaces the removed value.

If `value` is not present, the tree is unchanged.

### `getMin(node = root)`

Recursively returns the `TreeNode` with the smallest value in the tree or in
the supplied subtree. Read its value through the node's `data` getter:

```js
tree.getMin().data;
// 1
```

The tree must not be empty when this method is called without a node.

### `getMax(node = root)`

Recursively returns the `TreeNode` with the largest value in the tree or in
the supplied subtree. Read its value through the node's `data` getter:

```js
tree.getMax().data;
// 10
```

The tree must not be empty when this method is called without a node.

### `inOrderRecursive()`

Returns values in in-order traversal: left subtree, current node, right
subtree. For a binary search tree, the result is sorted in ascending order.

### `preOrderRecursive()`

Returns values in pre-order traversal: current node, left subtree, right
subtree.

### `postOrderRecursive()`

Returns values in post-order traversal: left subtree, right subtree, current
node.

### `levelOrderRecursive()`

Returns values level by level, starting at the root. The returned array is
flattened rather than grouped into separate levels.

## Complexity

Let `h` be the height of the tree and `n` be the number of stored values.

| Operation | Average time | Worst-case time | Extra space |
| --- | --- | --- | --- |
| `insertRecursive` | O(log n) | O(n) | O(h) |
| `containsRecursive` | O(log n) | O(n) | O(h) |
| `removeRecursive` | O(log n) | O(n) | O(h) |
| `getMin` / `getMax` | O(log n) | O(n) | O(h) |
| Each traversal | O(n) | O(n) | O(h) |

The average-case bounds assume the tree is reasonably balanced. Because this
is not a self-balancing tree, inserting already sorted values can produce a
linear chain and the worst-case bounds.
