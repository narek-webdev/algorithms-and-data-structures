class TreeNode {
  #data;
  #left;
  #right;

  constructor(data, left = null, right = null) {
    this.#data = data;
    this.#left = left;
    this.#right = right;
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
}

class BST {
  #root;

  constructor() {
    this.#root = null;
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

    return node;
  }

  _contains(node, value) {
    if (node === null) {
      return false;
    }

    if (value === node.data) {
      return true;
    }

    if (value < node.data) {
      return this._contains(node.left, value);
    }

    return this._contains(node.right, value);
  }

  _inorder(node, result) {
    if (node === null) {
      return;
    }

    this._inorder(node.left, result);
    result.push(node.data);
    this._inorder(node.right, result);
  }

  _preOrder(node, result) {
    if (node === null) {
      return;
    }

    result.push(node.data);
    this._preOrder(node.left, result);
    this._preOrder(node.right, result);
  }

  _postOrder(node, result) {
    if (node === null) {
      return;
    }

    this._postOrder(node.left, result);
    this._postOrder(node.right, result);
    result.push(node.data);
  }

  _remove(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.data) {
      node.left = this._remove(node.left, value);
    } else if (value > node.data) {
      node.right = this._remove(node.right, value);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      const successor = this.getMin(node.right);

      node.data = successor;
      node.right = this._remove(node.right, successor);
    }

    return node;
  }

  getMin(node = this.#root) {
    if (node === null) {
      return undefined;
    }

    let current = node;

    while (current.left) {
      current = current.left;
    }

    return current.data;
  }

  getMax(node = this.#root) {
    if (node === null) {
      return undefined;
    }

    let current = node;

    while (current.right) {
      current = current.right;
    }

    return current.data;
  }

  insertRecursive(value) {
    this.#root = this._insert(this.#root, value);

    return this;
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

  removeRecursive(value) {
    this.#root = this._remove(this.#root, value);

    return this;
  }

  insert(value) {
    const node = new TreeNode(value);

    if (!this.#root) {
      this.#root = node;
      return this;
    }

    let current = this.#root;

    while (true) {
      if (value < current.data) {
        if (current.left === null) {
          current.left = node;
          return this;
        }

        current = current.left;
      } else if (value > current.data) {
        if (current.right === null) {
          current.right = node;
          return this;
        }

        current = current.right;
      } else {
        return this;
      }
    }
  }

  contains(value) {
    let current = this.#root;

    while (current) {
      if (value < current.data) {
        current = current.left;
      } else if (value > current.data) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }
}
