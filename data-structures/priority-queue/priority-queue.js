class PriorityQueue {
  constructor(compareFn) {
    this.heap = [];
    this.compareFn = compareFn || ((a, b) => a - b);
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  heapifyUp() {
    let newElementIndex = this.heap.length - 1;
    let parentElementIndex = Math.floor((newElementIndex - 1) / 2);

    while (
      newElementIndex !== 0 &&
      this.compareFn(
        this.heap[newElementIndex],
        this.heap[parentElementIndex],
      ) < 0
    ) {
      this.swap(newElementIndex, parentElementIndex);

      newElementIndex = parentElementIndex;
      parentElementIndex = Math.floor((newElementIndex - 1) / 2);
    }
  }

  heapifyDown(index = 0) {
    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;

      let bestIndex = index;

      if (
        leftIndex < this.heap.length &&
        this.compareFn(this.heap[leftIndex], this.heap[bestIndex]) < 0
      ) {
        bestIndex = leftIndex;
      }

      if (
        rightIndex < this.heap.length &&
        this.compareFn(this.heap[rightIndex], this.heap[bestIndex]) < 0
      ) {
        bestIndex = rightIndex;
      }

      if (bestIndex === index) {
        break;
      }

      this.swap(index, bestIndex);
      index = bestIndex;
    }
  }

  getParent(i) {
    if (!Number.isInteger(i) || i < 0) {
      throw new Error("Error");
    }

    return Math.floor((i - 1) / 2);
  }

  getLeftChild(i) {
    if (!Number.isInteger(i) || i < 0) {
      throw new Error("Error");
    }

    return i * 2 + 1;
  }

  getRightChild(i) {
    if (!Number.isInteger(i) || i < 0) {
      throw new Error("Error");
    }

    return i * 2 + 2;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return !this.size();
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.isEmpty()) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return root;
  }
}