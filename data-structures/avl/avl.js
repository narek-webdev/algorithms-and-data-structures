class AvlNode {
  #data;
  #left;
  #right;
  #height;

  constructor(value) {
    this.#data = value;
    this.#left = null;
    this.#right = null;
    this.#height = 1;
  }

  get data() {
    return this.#data;
  }

  set data(value) {
    this.#data = value;
  }

  get left() {
    return this.#left;
  }

  set left(value) {
    this.#left = value;
  }

  get right() {
    return this.#right;
  }

  set right(value) {
    this.#right = value;
  }

  get height() {
    return this.#height;
  }

  set height(value) {
    this.#height = value;
  }
}

class AVL {
  #root;

  constructor() {
    this.#root = null;
  }

  _getHeight(node) {
    if (!node) return 0;
    return node.height;
  }

  _update(node) {
    if (!node) return;
    node.height =
      1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
  }

  _bf(node) {
    if (!node) return 0;
    return this._getHeight(node.left) - this._getHeight(node.right);
  }

  _getMin(node) {
    if (!node.left) return node;
    return this._getMin(node.left);
  }

  _rotateRight(y) {
    const x = y.left;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    this._update(y);
    this._update(x);

    return x;
  }

  _rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    this._update(x);
    this._update(y);

    return y;
  }

  _rotateLeftRight(x) {
    x.left = this._rotateLeft(x.left);
    return this._rotateRight(x);
  }

  _rotateRightLeft(x) {
    x.right = this._rotateRight(x.right);
    return this._rotateLeft(x);
  }

  _insert(node, value) {
    if (!node) return new AvlNode(value);

    if (value < node.data) {
      node.left = this._insert(node.left, value);
    } else if (value > node.data) {
      node.right = this._insert(node.right, value);
    }

    this._update(node);

    const balance = this._bf(node);

    if (balance > 1) {
      if (value > node.left.data) {
        node = this._rotateLeftRight(node);
      } else {
        node = this._rotateRight(node);
      }
    } else if (balance < -1) {
      if (value < node.right.data) {
        node = this._rotateRightLeft(node);
      } else {
        node = this._rotateLeft(node);
      }
    }

    return node;
  }

  _remove(node, value) {
    if (!node) return null;

    if (value < node.data) {
      node.left = this._remove(node.left, value);
    } else if (value > node.data) {
      node.right = this._remove(node.right, value);
    } else {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left || !node.right) {
        return node.left || node.right;
      }

      const successor = this._getMin(node.right);
      node.data = successor.data;
      node.right = this._remove(node.right, successor.data);
    }

    this._update(node);

    const balance = this._bf(node);

    if (balance > 1) {
      const leftBalance = this._bf(node.left);

      if (leftBalance >= 0) {
        node = this._rotateRight(node);
      } else {
        node = this._rotateLeftRight(node);
      }
    } else if (balance < -1) {
      const rightBalance = this._bf(node.right);

      if (rightBalance <= 0) {
        node = this._rotateLeft(node);
      } else {
        node = this._rotateRightLeft(node);
      }
    }

    return node;
  }

  insert(value) {
    this.#root = this._insert(this.#root, value);
  }

  remove(value) {
    this.#root = this._remove(this.#root, value);
  }

  inorder() {
    const result = [];

    function helper(node) {
      if (!node) return;
      helper(node.left);
      result.push(node.data);
      helper(node.right);
    }

    helper(this.#root);

    return result;
  }

  preorder() {
    const result = [];

    function helper(node) {
      if (!node) return;

      result.push(node.data);
      helper(node.left);
      helper(node.right);
    }

    helper(this.#root);

    return result;
  }

  postorder() {
    const result = [];

    function helper(node) {
      if (!node) return;

      helper(node.left);
      helper(node.right);
      result.push(node.data);
    }

    helper(this.#root);

    return result;
  }

  levelorder() {
    if (!this.#root) return [];

    const result = [];
    const queue = [this.#root];

    while (queue.length) {
      const current = queue.shift();

      result.push(current.data);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }

    return result;
  }
}
