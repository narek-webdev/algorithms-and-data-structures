class DynamicArray {
  #arr;
  #size;
  #capacity;
  #GROWTH = 2;

  constructor(cap) {
    if (!Number.isInteger(cap) || cap <= 0) {
      throw new Error("Capacity should be a valid positive integer");
    }

    this.#arr = new Int32Array(cap);
    this.#capacity = cap;
    this.#size = 0;
  }

  #resize() {
    this.#capacity = this.#capacity * this.#GROWTH;
    const newArray = new Int32Array(this.#capacity);

    for (let i = 0; i < this.#size; ++i) {
      newArray[i] = this.#arr[i];
    }

    this.#arr = newArray;
  }

  push_back(elem) {
    if (!Number.isInteger(elem)) {
      throw new Error("error");
    }

    if (this.#size === this.#capacity) {
      this.#resize();
    }

    this.#arr[this.#size++] = elem;
  }

  pop_back() {
    if (!this.#size) {
      throw new Error("error");
    }

    return this.#arr[--this.#size];
  }

  at(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.#size) {
      throw new Error("error");
    }

    return this.#arr[index];
  }

  set(index, value) {
    if (!Number.isInteger(index) || index < 0 || index >= this.#size) {
      throw new Error("error");
    }

    if (!Number.isInteger(value)) {
      throw new Error("error");
    }

    this.#arr[index] = value;
  }

  front() {
    if (!this.#size) {
      throw new Error("error");
    }

    return this.#arr[0];
  }

  back() {
    if (!this.#size) {
      throw new Error("error");
    }

    return this.#arr[this.#size - 1];
  }

  erase(pos) {
    if (!this.#size) {
      throw new Error("error");
    }

    if (!Number.isInteger(pos) || pos < 0 || pos >= this.#size) {
      throw new Error("error");
    }

    for (let i = pos; i < this.#size - 1; ++i) {
      this.#arr[i] = this.#arr[i + 1];
    }

    --this.#size;
  }

  insert(pos, value) {
    if (!Number.isInteger(pos) || pos < 0 || pos > this.#size) {
      throw new Error("error");
    }

    if (!Number.isInteger(value)) {
      throw new Error("error");
    }

    if (this.#size === this.#capacity) {
      this.#resize();
    }

    for (let i = this.#size - 1; i >= pos; --i) {
      this.#arr[i + 1] = this.#arr[i];
    }

    this.#arr[pos] = value;

    ++this.#size;
  }

  swap(i, j) {
    if (!Number.isInteger(i) || i < 0 || i >= this.#size) {
      throw new Error("error");
    }

    if (!Number.isInteger(j) || j < 0 || j >= this.#size) {
      throw new Error("error");
    }

    if (i === j) return;

    [this.#arr[i], this.#arr[j]] = [this.#arr[j], this.#arr[i]];
  }

  *values() {
    for (let i = 0; i < this.#size; ++i) {
      yield this.#arr[i];
    }
  }

  *keys() {
    for (let i = 0; i < this.#size; ++i) {
      yield i;
    }
  }

  forEach(fn) {
    if (typeof fn !== "function") {
      throw new Error("error");
    }

    for (let i = 0; i < this.#size; ++i) {
      fn(this.#arr[i], i);
    }
  }

  map(fn) {
    if (typeof fn !== "function") {
      throw new Error("error");
    }

    const newDArray = new DynamicArray(this.#capacity);

    for (let i = 0; i < this.#size; ++i) {
      newDArray.push_back(fn(this.#arr[i]));
    }

    return newDArray;
  }

  filter(fn) {
    if (typeof fn !== "function") {
      throw new Error("error");
    }

    const newDArray = new DynamicArray(this.#capacity);

    for (let i = 0; i < this.#size; ++i) {
      if (fn(this.#arr[i])) {
        newDArray.push_back(this.#arr[i]);
      }
    }

    return newDArray;
  }

  reduce(fn, init) {
    if (typeof fn !== "function") {
      throw new Error("error");
    }

    let accumulator = init;

    for (let i = 0; i < this.#size; ++i) {
      accumulator = fn(accumulator, this.#arr[i]);
    }

    return accumulator;
  }

  some(fn) {
    if (typeof fn !== "function") {
      throw new Error("error");
    }

    for (let i = 0; i < this.#size; ++i) {
      if (fn(this.#arr[i])) {
        return true;
      }
    }

    return false;
  }

  find(fn) {
    if (typeof fn !== "function") {
      throw new Error("error");
    }

    for (let i = 0; i < this.#size; ++i) {
      if (fn(this.#arr[i])) {
        return this.#arr[i];
      }
    }

    return;
  }

  findIndex(fn) {
    if (typeof fn !== "function") {
      throw new Error("error");
    }

    for (let i = 0; i < this.#size; ++i) {
      if (fn(this.#arr[i])) {
        return i;
      }
    }

    return -1;
  }

  includes(value) {
    if (!Number.isInteger(value)) {
      throw new Error("error");
    }

    for (let i = 0; i < this.#size; ++i) {
      if (this.#arr[i] === value) {
        return true;
      }
    }

    return false;
  }

  [Symbol.iterator]() {
    const arr = this.#arr;
    const lastIndex = this.#size;
    let indexCounter = 0;

    return {
      next() {
        if (indexCounter !== lastIndex) {
          return { value: arr[indexCounter++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }
}
