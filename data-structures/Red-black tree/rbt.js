const RED = "RED";
const BLACK = "BLACK";

class TreeNode {
  constructor(data, color = RED, parent = null, left = null, right = null) {
    this.data = data;
    this.color = color;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }
}

class RBTree {
  constructor() {
    this.nil = new TreeNode(null);
    this.nil.color = BLACK;

    this.root = this.nil;
  }

  leftRotate(x) {
    const y = x.right;

    x.right = y.left;

    if (y.left !== this.nil) {
      y.left.parent = x;
    }

    y.parent = x.parent;

    if (x.parent === this.nil) {
      this.root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }

    y.left = x;
    x.parent = y;
  }

  rightRotate(y) {
    const x = y.left;

    y.left = x.right;

    if (x.right !== this.nil) {
      x.right.parent = y;
    }

    x.parent = y.parent;

    if (y.parent === this.nil) {
      this.root = x;
    } else if (y === y.parent.left) {
      y.parent.left = x;
    } else {
      y.parent.right = x;
    }

    x.right = y;
    y.parent = x;
  }

  insert(data) {
    const node = new TreeNode(data);

    node.left = this.nil;
    node.right = this.nil;
    node.parent = this.nil;

    let parent = this.nil;
    let current = this.root;

    while (current !== this.nil) {
      parent = current;

      if (node.data < current.data) {
        current = current.left;
      } else if (node.data > current.data) {
        current = current.right;
      } else {
        return;
      }
    }

    node.parent = parent;

    if (parent === this.nil) {
      this.root = node;
    } else if (node.data < parent.data) {
      parent.left = node;
    } else {
      parent.right = node;
    }

    this.insertFixUp(node);
  }

  insertFixUp(node) {
    while (node.parent.color === RED) {
      let gp = node.parent.parent;

      if (node.parent === gp.left) {
        let uncle = gp.right;

        if (uncle.color === RED) {
          node.parent.color = BLACK;
          uncle.color = BLACK;
          gp.color = RED;
          node = gp;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.leftRotate(node);
          }

          node.parent.color = BLACK;
          gp.color = RED;

          this.rightRotate(gp);
        }
      } else {
        let uncle = gp.left;

        if (uncle.color === RED) {
          node.parent.color = BLACK;
          uncle.color = BLACK;
          gp.color = RED;

          node = gp;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rightRotate(node);
          }

          node.parent.color = BLACK;
          gp.color = RED;

          this.leftRotate(gp);
        }
      }
    }

    this.root.color = BLACK;
  }
}
