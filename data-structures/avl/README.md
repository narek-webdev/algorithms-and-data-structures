# AVL Tree

## Description

`AVL` is a self-balancing binary search tree. Each node stores its height, and
recursive insertion and removal use single or double rotations to keep the
balance factor of every affected node within `-1` and `1`.

Values smaller than a node are stored in its left subtree, and values larger
than a node are stored in its right subtree. Duplicate values are ignored.

The implementation provides insertion, removal, and depth-first and
level-order traversals. The tree root is kept private.

## Usage

```js
const tree = new AVL();

tree.insert(30);
tree.insert(20);
tree.insert(10); // Rotates to keep the tree balanced.

tree.inorder();
// [10, 20, 30]

tree.levelorder();
// [20, 10, 30]

tree.remove(10);
```

`avl.js` defines `AVL` and its internal `AvlNode` class, but it does not
currently export either class. The example assumes the source has been loaded
in the same JavaScript scope.

## API

### `new AVL()`

Creates an empty AVL tree.

### `insert(value)`

Recursively inserts `value` and rebalances the tree using the appropriate
rotation when a node becomes unbalanced. If `value` already exists, the tree
is unchanged.

### `remove(value)`

Recursively removes `value` and rebalances the tree after removal. Nodes with
no children, one child, or two children are handled; a node with two children
is replaced with the minimum value from its right subtree.

If `value` is not present, the tree is unchanged.

### `inorder()`

Returns values in in-order traversal: left subtree, current node, right
subtree. For a binary search tree, the result is sorted in ascending order.

### `preorder()`

Returns values in pre-order traversal: current node, left subtree, right
subtree.

### `postorder()`

Returns values in post-order traversal: left subtree, right subtree, current
node.

### `levelorder()`

Returns values level by level, starting at the root. The returned array is
flattened rather than grouped into separate levels.

## AVL Concepts

The balance factor of a node is:

```text
height(left subtree) - height(right subtree)
```

Insertion and removal use these rotation cases:

- LL — right rotation
- RR — left rotation
- LR — left rotation followed by right rotation
- RL — right rotation followed by left rotation

## Complexity

Let `n` be the number of stored values and `h` be the tree height.

| Operation | Time | Extra space |
| --- | --- | --- |
| `insert` | O(h) | O(h) |
| `remove` | O(h) | O(h) |
| `inorder` | O(n) | O(h) |
| `preorder` | O(n) | O(h) |
| `postorder` | O(n) | O(h) |
| `levelorder` | O(n) | O(n) |

For a balanced tree, `h` is O(log n), so insertion and removal are O(log n).
