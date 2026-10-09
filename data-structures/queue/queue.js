class Queue {
  #capacity;
  #size;
  #arr;
  #front;
  #rear;

  constructor(capacity = 5) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error("cap is wrong");
    }

    this.#arr = [];
    this.#size = 0;
    this.#front = 0;
    this.#rear = -1;
    this.#capacity = capacity;
  }

  enqueue(elem) {
    if (this.#size === this.#capacity) {
      throw new Error("Queue is full");
    }

    this.#rear = (this.#rear + 1) % this.#capacity;
    this.#arr[this.#rear] = elem;
    ++this.#size;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    const initialIndex = this.#front;

    this.#front = (this.#front + 1) % this.#capacity;
    --this.#size;

    return this.#arr[initialIndex];
  }

  get size() {
    return this.#size;
  }

  get_front() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    return this.#arr[this.#front];
  }

  get_back() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    return this.#arr[this.#rear];
  }

  print() {
    let counter = this.#size;
    let index = this.#front;

    while (counter--) {
      console.log(this.#arr[index]);
      index = (index + 1) % this.#capacity;
    }
  }

  isEmpty() {
    return !this.#size;
  }

  [Symbol.iterator]() {
    const current = this.#arr;
    let index = this.#front;
    let counter = this.#size;
    const cap = this.#capacity;

    return {
      next() {
        if (counter) {
          const result = { value: current[index], done: false };
          index = (index + 1) % cap;
          --counter;
          return result;
        }

        return { value: undefined, done: true };
      },
    };
  }
}
