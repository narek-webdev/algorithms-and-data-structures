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

  set data(val) {
    this.#data = val;
  }

  set next(val) {
    this.#next = val;
  }
}

class SList {
  #head;
  #size;

  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  get head() {
    return this.#head;
  }

  set head(head) {
    this.#head = head;
  }

  get size() {
    return this.#size;
  }

  set size(value) {
    this.#size = value;
  }

  static fromArray(arr) {
    if (!Array.isArray(arr)) return;

    const list = new SList();

    if (!arr.length) return list;

    for (let i = 0; i < arr.length; ++i) {
      list.push_back(arr[i]);
    }

    return list;
  }

  isValidIndex(index) {
    return Number.isInteger(index) && index >= 0 && index < this.size;
  }

  clear() {
    this.size = 0;
    this.head = null;
  }

  push_back(elem) {
    if (this.isEmpty()) {
      this.head = new Node(elem);
      ++this.size;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = new Node(elem);

    ++this.size;
  }

  push_front(elem) {
    const node = new Node(elem);
    node.next = this.head;
    this.head = node;
    ++this.size;
  }

  pop_back() {
    if (this.isEmpty()) return;

    if (this.size === 1) {
      this.head = null;
    } else {
      let current = this.head;

      while (current.next.next) {
        current = current.next;
      }

      current.next = null;
    }

    --this.size;
  }

  pop_front() {
    if (this.isEmpty()) return;
    this.head = this.head.next;
    --this.size;
  }

  toArray() {
    if (this.isEmpty()) return [];

    let arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    return arr;
  }

  front() {
    if (this.isEmpty()) return;
    return this.head.data;
  }

  isEmpty() {
    return !this.size;
  }

  at(index) {
    if (!this.isValidIndex(index)) return;

    let current = this.head;

    while (index--) {
      current = current.next;
    }

    return current.data;
  }

  insert(index, value) {
    if (!this.isValidIndex(index)) return;

    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    if (!index) {
      let head = this.head;
      node.next = head;
      this.head = node;
    } else {
      let current = this.head;
      let prev = null;

      while (index--) {
        prev = current;
        current = current.next;
      }

      prev.next = node;
      node.next = current;
    }

    ++this.size;
  }

  erase(index) {
    if (!this.isValidIndex(index)) return;
    if (!this.head) return;
    if (!index) return this.pop_front();

    let current = this.head;
    let prev = null;

    while (index--) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;

    --this.size;
  }

  reverse() {
    if (!this.head) return;

    let current = this.head;

    let size = this.size;
    let nextCurrent = current.next;
    let guess = null;

    while (size--) {
      current.next = guess;
      guess = current;
      current = nextCurrent;
      nextCurrent = current?.next;
    }

    this.head = guess;
  }

  remove(value) {
    if (!this.head) return;

    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === value) {
        this.erase(index);
        return;
      }

      ++index;

      current = current.next;
    }
  }

  sort(cmp) {
    cmp = typeof cmp === "function" ? cmp : (a, b) => a - b;

    function mergeSort(list) {
      if (!list || !list.next) return list;

      let slow = list;
      let fast = list.next;

      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }

      let mid = slow.next;
      slow.next = null;

      let left = mergeSort(list);
      let right = mergeSort(mid);

      return merge(left, right);
    }

    this.head = mergeSort(this.head);

    function merge(l1, l2) {
      let dummy = new Node();
      let current = dummy;

      while (l1 && l2) {
        if (cmp(l1.data, l2.data) <= 0) {
          current.next = l1;
          l1 = l1.next;
        } else {
          current.next = l2;
          l2 = l2.next;
        }

        current = current.next;
      }

      current.next = l1 || l2;

      return dummy.next;
    }
  }

  [Symbol.iterator]() {
    let current = this.head;
    let size = this.size;

    return {
      next() {
        if (size--) {
          let value = { value: current.data, done: false };
          current = current.next;
          return value;
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }
}