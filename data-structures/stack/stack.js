class Stack {
  #capacity;
  #arr;
  #top;

  constructor(initialCapacity = 16) {
    this.#capacity = initialCapacity;
    this.#arr = new Array(initialCapacity);
    this.#top = 0;
  }

  isEmpty() {
    return !this.#top;
  }

  get top() {
    return this.#arr[this.#top - 1];
  }

  size() {
    return this.#top;
  }

  push(elem) {
    if (this.#top === this.#capacity) {
      throw new Error("Maximum call stack size exceeded");
    }

    this.#arr[this.#top++] = elem;
  }

  pop() {
    if (!this.#top) return "stack is empty";
    return this.#arr[--this.#top];
  }

  clear() {
    this.#top = 0;
  }

  [Symbol.iterator]() {
    let counter = this.#top;
    const current = this.#arr;

    return {
      next() {
        if (counter > 0) {
          return { value: current[--counter], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }
}