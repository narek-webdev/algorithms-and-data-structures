# Red-Black Tree

## Description

`RBTree` is a self-balancing binary search tree. Each node is marked `RED` or
`BLACK`, and insertion uses recoloring and left/right rotations to preserve
the red-black tree properties.

The implementation stores a single black sentinel node (`nil`) in place of
missing children. Values are ordered with JavaScript's `<` and `>` operators,
and duplicate values are ignored.

The current implementation supports insertion only. Search, deletion, and
traversal methods are not included.

## Usage

```js
const tree = new RBTree();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(20); // Duplicate values are ignored.

tree.root.data;
// 20

tree.root.color;
// "BLACK"
```

`rbt.js` defines `RBTree` and its internal `TreeNode` class, but it does not
currently export either class. The example assumes the source has been loaded
in the same JavaScript scope.

## API

### `new RBTree()`

Creates an empty tree. The tree's `root` initially points to its black `nil`
sentinel.

### `insert(data)`

Adds `data` to the tree according to binary-search-tree ordering, then
rebalances the tree with recoloring and rotations.

If an equal value is already present, the tree is unchanged. The method does
not return the tree, so calls cannot be chained.

### `root`

The root node of the tree. When the tree is empty, `root === nil`.

Nodes expose the following fields:

- `data` — the stored value
- `color` — either `"RED"` or `"BLACK"`
- `parent` — the parent node
- `left` and `right` — child nodes

Missing children refer to the tree's `nil` sentinel rather than `null`.

### `nil`

The shared black sentinel used for missing children and the empty root. It is
an implementation detail and should not be inserted as a value.

## Red-Black Properties

After every successful insertion, the implementation maintains these
properties:

1. Every node is red or black.
2. The `nil` leaves are black.
3. The root is black.
4. A red node cannot have a red child.
5. Every path from a node to its descendant `nil` leaves contains the same
   number of black nodes.

These properties keep the tree height logarithmic in the number of stored
values.

## Complexity

Let `n` be the number of stored values.

| Operation | Time | Extra space |
| --- | --- | --- |
| `insert` | O(log n) | O(1) |

The tree stores one node per distinct value, plus one shared sentinel node.
