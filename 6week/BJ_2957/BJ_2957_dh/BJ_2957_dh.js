const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const length = input.shift();

class TreeNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  insert(data, node = this.root) {
    if (node === null) {
      this.root = new TreeNode(data);
      console.log(0);
      return;
    }

    this.count += 1;

    if (node.data > data) {
      if (node.left === null) {
        node.left = new TreeNode(data);
        console.log(this.count);
      } else {
        this.insert(data, node.left);
      }
    }

    if (node.data < data) {
      if (node.right === null) {
        node.right = new TreeNode(data);
        console.log(this.count);
      } else {
        this.insert(data, node.right);
      }
    }
  }
}

const bst = new BST();

input.forEach((v) => {
  bst.insert(v);
});
