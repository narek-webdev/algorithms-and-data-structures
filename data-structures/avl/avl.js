class TreeNode {
  #data;
  #left;
  #right;
  #height;

  constructor(data) {
    this.#data = data;
    this.#left = null;
    this.#right = null;
    this.#height = 1;
  }

  get data() {
    return this.#data;
  }

  get left() {
    return this.#left;
  }

  get right() {
    return this.#right;
  }

  get height() {
    return this.#height;
  }

  set data(value) {
    this.#data = value;
  }

  set left(value) {
    this.#left = value;
  }

  set right(value) {
    this.#right = value;
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

  getHeight(node) {
    if (!node) return 0;
    return node.height;
  }

  getBalance(node) {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  rightRotation(node) {
    const x = node;
    const y = node.left;
    const T2 = y.right;

    y.right = x;
    x.left = T2;

    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

    return y;
  }

  leftRotation(node) {
    const x = node;
    const y = node.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

    return y;
  }

  leftRightRotation(node) {
    node.left = this.leftRotation(node.left);
    node = this.rightRotation(node);

    return node;
  }

  rightLeftRotation(node) {
    node.right = this.rightRotation(node.right);
    node = this.leftRotation(node);
    return node;
  }

  _insert(node, value) {
    if (node === null) {
      return new TreeNode(value);
    }

    if (value < node.data) {
      node.left = this._insert(node.left, value);
    } else if (value > node.data) {
      node.right = this._insert(node.right, value);
    }

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    const balance = this.getBalance(node);

    if (balance > 1) {
      if (value > node.left.data) {
        // LR
        node = this.leftRightRotation(node);
      } else {
        // LL
        node = this.rightRotation(node);
      }
    } else if (balance < -1) {
      if (value < node.right.data) {
        // RL
        node = this.rightLeftRotation(node);
      } else {
        // RR
        node = this.leftRotation(node);
      }
    }

    return node;
  }

  _contains(node, value) {
    if (node === null) {
      return false;
    }

    if (value < node.data) {
      return this._contains(node.left, value);
    } else if (value > node.data) {
      return this._contains(node.right, value);
    } else if (value === node.data) {
      return true;
    }

    return false;
  }

  _inorder(node, result) {
    if (!node) return result;

    this._inorder(node.left, result);
    result.push(node.data);
    this._inorder(node.right, result);
  }

  _preOrder(node, result) {
    if (!node) return result;

    result.push(node.data);
    this._preOrder(node.left, result);
    this._preOrder(node.right, result);
  }

  _postOrder(node, result) {
    if (!node) return result;

    this._postOrder(node.left, result);
    this._postOrder(node.right, result);
    result.push(node.data);
  }

  _levelOrder(node, level, result) {
    if (!node) return;

    if (result.length <= level) result.push([]);

    result[level].push(node.data);

    this._levelOrder(node.left, level + 1, result);
    this._levelOrder(node.right, level + 1, result);
  }

  calculateHeigh(node) {
    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  _remove(node, value) {
    if (!node) return node;

    if (value < node.data) {
      node.left = this._remove(node.left, value);
    } else if (value > node.data) {
      node.right = this._remove(node.right, value);
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left || !node.right) {
        return node.left || node.right;
      }

      const rightPartMin = this.getMin(node.right);
      const successor = rightPartMin.data;

      node.data = successor;
      node.right = this._remove(node.right, successor);
    }

    node.height = this.calculateHeigh(node);

    const balance = this.getBalance(node);

    if (balance > 1) {
      // LL
    } else if (balance < -1) {
      // RR
    }

    console.log(node);

    return node;
  }

  getMin(node = this.#root) {
    if (node.left === null) {
      return node;
    }

    return this.getMin(node.left);
  }

  getMax(node = this.#root) {
    if (node.right === null) {
      return node;
    }

    return this.getMax(node.right);
  }

  insertRecursive(value) {
    this.#root = this._insert(this.#root, value);
  }

  containsRecursive(value) {
    return this._contains(this.#root, value);
  }

  inOrderRecursive() {
    const result = [];
    this._inorder(this.#root, result);
    return result;
  }

  preOrderRecursive() {
    const result = [];
    this._preOrder(this.#root, result);
    return result;
  }

  postOrderRecursive() {
    const result = [];
    this._postOrder(this.#root, result);
    return result;
  }

  levelOrderRecursive() {
    const result = [];
    this._levelOrder(this.#root, 0, result);
    return result.flat();
  }

  removeRecursive(value) {
    this.#root = this._remove(this.#root, value);
  }
}