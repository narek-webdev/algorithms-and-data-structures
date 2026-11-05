# Graph

`Graph` represents a graph with an adjacency matrix. Vertices are identified
by integer indices from `0` through `size - 1`.

The source file currently defines `Graph` without exporting it as a module.
The examples below assume the class has been loaded into the current
JavaScript environment.

## Usage

```js
const graph = new Graph(3);

graph.addEdge(0, 1);
graph.addEdge(1, 2);

graph.print();
// 0 1 0
// 1 0 1
// 0 1 0
```

By default, edges are undirected. Pass `true` as the second constructor
argument to create a directed graph:

```js
const graph = new Graph(3, true);

graph.addEdge(0, 1);

graph.print();
// 0 1 0
// 0 0 0
// 0 0 0
```

## API

### `new Graph(size, directed = false)`

Creates a graph with `size` vertices and an initially empty adjacency matrix.
`directed` controls whether an edge is added in one direction or both
directions.

If `size` is not a non-negative integer, the graph's `size` property is set to
`0`. The matrix allocation uses the supplied `size` value directly, so callers
should provide a non-negative integer.

### `addVertex()`

Adds one vertex to the graph and expands the adjacency matrix with zero-filled
row and column entries.

### `addEdge(u, v)`

Adds an edge from vertex `u` to vertex `v`.

For an undirected graph, the reverse edge from `v` to `u` is added as well.
Invalid or out-of-range vertex indices are ignored.

### `print()`

Logs the adjacency matrix one row at a time. A `1` represents an edge and a `0`
represents no edge.

## Representation

The graph stores its adjacency matrix in the public `matrix` property. For
example, `matrix[u][v]` is `1` when an edge from `u` to `v` exists and `0`
otherwise.

## Complexity

Let `n` be the number of vertices.

| Operation | Time | Space |
| --- | --- | --- |
| `new Graph(n)` | O(n²) | O(n²) |
| `addVertex()` | O(n²) | O(n²) |
| `addEdge(u, v)` | O(1) | O(1) |
| `print()` | O(n²) | O(1) |
