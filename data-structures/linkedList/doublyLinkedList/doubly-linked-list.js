class Node {
  #data;
  #next;
  #prev;

  constructor(data, next = null, prev = null) {
    this.#data = data;
    this.#next = next;
    this.#prev = prev;
  }

  get data() {
    return this.#data;
  }

  get next() {
    return this.#next;
  }

  get prev() {
    return this.#prev;
  }

  set data(value) {
    this.#data = value;
  }

  set next(value) {
    this.#next = value;
  }

  set prev(value) {
    this.#prev = value;
  }
}

class DList {
  #head;
  #tail;
  #size;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  static fromArray(arr) {
    if (!Array.isArray(arr)) return;
    if (!arr.length) return new DList();

    let list = new DList();
    const node = new Node(arr[0]);
    list.head = node;
    list.tail = node;
    list.size++;

    for (let i = 1; i < arr.length; ++i) {
      const node = new Node(arr[i]);
      const currentTail = list.tail;

      currentTail.next = node;
      node.prev = currentTail;
      list.tail = node;

      ++list.size;
    }

    return list;
  }

  get size() {
    return this.#size;
  }

  set size(size) {
    this.#size = size;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  set head(node) {
    this.#head = node;
  }

  set tail(node) {
    this.#tail = node;
  }

  clear() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  push_back(elem) {
    const node = new Node(elem);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      let prevElement = this.tail;
      prevElement.next = node;
      node.prev = prevElement;
      this.tail = node;
    }

    ++this.size;
  }

  push_front(elem) {
    const node = new Node(elem);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      let prevHead = this.head;
      this.head = node;
      prevHead.prev = this.head;
      this.head.next = prevHead;
    }

    ++this.size;
  }

  pop_back() {
    if (this.isEmpty()) return;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    --this.size;
  }

  pop_front() {
    if (this.isEmpty()) return;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    --this.size;
  }

  toArray() {
    if (this.isEmpty()) return [];

    const arr = [];

    let current = this.head;

    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    return arr;
  }

  front() {
    return this.head;
  }

  back() {
    return this.tail;
  }

  isEmpty() {
    return !this.size;
  }

  at(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.size) return;

    let current = this.head;

    while (index--) {
      current = current.next;
    }

    return current;
  }

  insert(index, value) {
    if (!Number.isInteger(index) || index < 0 || index > this.size) return;

    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.head;

      while (index--) {
        current = current.next;
      }

      if (current === this.head) {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      } else if (current === this.tail) {
        node.prev = this.tail.prev;
        this.tail.prev.next = node;
        node.next = this.tail;
        this.tail.prev = node;
      } else if (current === null) {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      } else {
        node.prev = current.prev;
        node.next = current;
        current.prev.next = node;
        current.prev = node;
      }
    }

    ++this.size;
  }

  erase(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.size) return;

    if (this.isEmpty()) return;

    let current = this.head;

    while (index--) {
      current = current.next;
    }

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else if (current === this.head) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (current === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    --this.size;
  }

  reverse() {
    if (this.isEmpty() || this.size === 1) return;

    let current = this.head;
    let guess = null;
    let size = this.size;
    let currentNext = current.next;
    let fixedHead = this.head;

    while (size--) {
      current.next = guess;
      guess = current;
      current.prev = currentNext;

      current = currentNext;
      currentNext = currentNext?.next || null;
    }

    this.head = guess;
    this.tail = fixedHead;
  }

  remove(value) {
    if (this.isEmpty()) return;

    let index = 0;
    let current = this.head;

    while (current) {
      if (current.data === value) {
        this.erase(index);
        return value;
      }
      ++index;
      current = current.next;
    }

    return null;
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
      mid.prev = null;

      let left = mergeSort(list);
      let right = mergeSort(mid);

      return merge(left, right);
    }

    function merge(l1, l2) {
      const dummy = new Node();
      let current = dummy;

      while (l1 && l2) {
        let node;

        if (cmp(l1.data, l2.data) <= 0) {
          node = l1;
          l1 = l1.next;
        } else {
          node = l2;
          l2 = l2.next;
        }

        current.next = node;
        node.prev = current === dummy ? null : current;

        current = node;
      }

      let rest = l1 || l2;

      if (rest) {
        current.next = rest;
        rest.prev = current === dummy ? null : current;
      } else {
        current.next = null;
      }

      const head = dummy.next;

      if (head) head.prev = null;

      return head;
    }

    this.head = mergeSort(this.head);

    let current = this.head;

    while (current && current.next) {
      current = current.next;
    }

    this.tail = current;
  }

  [Symbol.iterator]() {
    let current = this.head;

    return {
      next() {
        if (current) {
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