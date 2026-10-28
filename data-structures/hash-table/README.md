# Hash Table

`HashTable` is a key-value data structure implemented with separate chaining.
It stores entries in buckets, uses a string hash function to select a bucket,
and automatically resizes when the configured load factor is reached.

## Features

- String keys with arbitrary JavaScript values
- Collision handling through separate chaining
- Prime-number bucket capacities
- Automatic resizing when the maximum load factor is reached
- Key, value, and entry iterators
- `for...of` support for iterating over entries

## Example

```js
const table = new HashTable();

table.set("name", "Ada");
table.set("language", "JavaScript");
table.set("year", 1843);

console.log(table.get("name")); // "Ada"
console.log(table.has("language")); // true
console.log(table.getSize()); // 3

table.set("year", 1844); // Updates the existing value
table.delete("language");

for (const [key, value] of table) {
  console.log(key, value);
}
```

This example assumes that the `HashTable` class has been loaded into the
current JavaScript environment. The source file currently defines the class
without exporting it as a module.

## Constructor

```js
new HashTable(initialCapacity, maxLoadFactor)
```

- `initialCapacity` is the requested number of buckets and defaults to `5`.
  The actual capacity is the next prime number at or above this value.
- `maxLoadFactor` controls when the table grows and defaults to `1.0`.
  Resizing occurs when `size / capacity` is greater than or equal to this
  value.
- `initialCapacity` must be a non-negative integer. Invalid values throw an
  error.

## API

### `set(key, value)`

Adds a key-value pair to the table. If `key` already exists, its value is
updated without increasing the table size.

Keys should be strings because the hash function uses their length and
character codes.

### `get(key)`

Returns the value associated with `key`. Returns `undefined` when the key is
not present.

### `has(key)`

Returns `true` when `key` exists in the table; otherwise, returns `false`.

### `delete(key)`

Removes `key` and its value from the table. If the key is not present, the
table remains unchanged.

### `getSize()`

Returns the number of key-value pairs currently stored.

### `loadFactor()`

Returns the current load factor:

```text
size / capacity
```

### `clear()`

Removes all entries while preserving the table's current capacity.

### `resize()`

Grows the table to the next prime number after twice its current capacity and
rehashes all existing entries. This method is also called automatically by
`set` when the maximum load factor is reached.

### `keys()`, `values()`, and `entries()`

Return generators for iterating over keys, values, or `[key, value]` pairs:

```js
for (const key of table.keys()) {
  console.log(key);
}

for (const value of table.values()) {
  console.log(value);
}

for (const [key, value] of table.entries()) {
  console.log(key, value);
}
```

The table itself is iterable and yields the same `[key, value]` pairs as
`entries()`.

## Complexity

With a well-distributed hash function, the expected complexity is:

| Operation | Average time | Worst-case time |
| --- | --- | --- |
| `set` | O(1) | O(n) |
| `get` | O(1) | O(n) |
| `has` | O(1) | O(n) |
| `delete` | O(1) | O(n) |
| `getSize` | O(1) | O(1) |
| `loadFactor` | O(1) | O(1) |
| `clear` | O(capacity) | O(capacity) |
| `resize` | O(n) | O(n) |

Here, `n` is the number of entries and `capacity` is the number of buckets.
The table uses O(n + capacity) space.
