class Node {
  #data;
  #next;

  constructor(data, next = null) {
    this.#data = data;
    this.#next = next;
  }

  get data() {
    return this.#data;
  }

  get next() {
    return this.#next;
  }

  set next(value) {
    this.#next = value;
  }

  set data(value) {
    this.#data = value;
  }
}

class SList {
  #size;
  #head;

  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  static fromArray(arr) {
    const list = new SList();

    if (!arr.length) return list;

    for (let i = arr.length - 1; i >= 0; --i) {
      list.push_front(arr[i]);
    }

    return list;
  }

  get size() {
    return this.#size;
  }

  clear() {
    this.#head = null;
    this.#size = 0;
  }

  push_back(elem) {
    const node = new Node(elem);

    if (!this.#size) {
      this.#head = node;
    } else {
      let lastElem = this.#head;

      while (lastElem.next) {
        lastElem = lastElem.next;
      }

      lastElem.next = node;
    }

    ++this.#size;
  }

  push_front(elem) {
    const node = new Node(elem);

    if (!this.#size) {
      this.#head = node;
    } else {
      node.next = this.#head;
      this.#head = node;
    }

    ++this.#size;
  }

  pop_back() {
    if (!this.#size) return;

    if (!this.#head?.next) {
      this.#head = null;
    } else {
      let current = this.#head;

      while (current.next?.next) {
        current = current.next;
      }

      current.next = null;
    }

    --this.#size;
  }

  pop_front() {
    if (!this.#size) return;

    if (!this.#head?.next) {
      this.#head = null;
    } else {
      this.#head = this.#head.next;
    }

    --this.#size;
  }

  toArray() {
    if (!this.#size) return [];

    let result = [];
    let current = this.#head;

    for (let i = 0; i < this.#size; ++i) {
      result.push(current.data);
      current = current.next;
    }

    return result;
  }

  front() {
    if (!this.#size) return "Not found";
    return this.#head.data;
  }

  isEmpty() {
    return !this.#size;
  }

  at(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.#size)
      return "Error";

    let counter = 0;
    let current = this.#head;

    while (counter !== index) {
      current = current.next;
      ++counter;
    }

    return current.data;
  }

  // Not finished yet
  insert(index, value) {}

  erase(index) {
    if (!Number.isInteger(index)) return "Index must be an integer";
    if (index < 0) return "Index should be greateer than equal to 0";
    if (!this.#size) return "This is an empty linked list";
    if (index >= this.#size) return "Index can't be greateer than the size";

    if (index === 0) {
      this.#head = this.#head.next;
    } else {
      let current = this.#head;
      let prev = this.#head;
      let counter = 0;

      while (counter !== index) {
        prev = current;
        current = current.next;
        ++counter;
      }

      prev.next = prev.next.next;
    }

    --this.#size;
  }

  // Not finished yet
  merge(list) {}

  remove(value) {
    if (!this.#size) return "Error";

    if (this.#head.data === value) {
      this.#head = this.#head.next;
      --this.#size;
      return;
    }

    let counter = this.#size;
    let current = this.#head;
    let prev = this.#head;

    while (counter) {
      if (current.data !== value) {
        prev = current;
        current = current.next;
      } else {
        const index = this.#size - counter;
        this.erase(index);
        break;
      }

      --counter;
    }
  }

  // Not finished yet
  sort(cmp) {
    function mergeSort() {}
    function merge() {}
  }

  [Symbol.iterator]() {
    let current = this.#head;

    return {
      next() {
        if (current) {
          const result = { value: current.data, done: false };
          current = current.next;
          return result;
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }
}