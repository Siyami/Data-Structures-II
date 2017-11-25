class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(x) {
      this.storage.push(x);
    }

  dequeue() {
      return this.storage.shift();
    }

  isEmpty() {
      return this.storage.length === 0;
    }
}

// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(value) {
    if (!this.value) {
      this.value = value;
      return;
    }
    if (this.value > value) {
      if (!this.left) {
        this.left = new BinarySearchTree();
        this.left.value = value;
      } else {
        this.left.insert(value);
      }
    } 
    if (this.value < value) {
      if (!this.right) {
        this.right = new BinarySearchTree();
        this.right.value = value;
      } else {
        this.right.insert(value);
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target) return true;
    if (this.left && !this.right) return this.left.contains(target);
    if (this.right && !this.left) return this.right.contains(target);
    if (this.left && this.right) {
      return this.left.contains(target) || this.right.contains(target);   
    }
    return false; 
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process. 
  // Below is solution of preorder BST Call (order is root -> left node -> right node)
  depthFirstForEach(cb) {
    if (!this.value) return null;
    this.value = cb(this.value);
    if (this.left && !this.right) this.left.depthFirstForEach(cb);
    if (this.right && !this.left) this.right.depthFirstForEach(cb);
    if (this.right && this.left) {
      this.left.depthFirstForEach(cb);
      this.right.depthFirstForEach(cb);
    }
    return this;
  } 

  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  
  breadthFirstForEach(cb) {
    if (!this.value) return null;
    const myQ = new Queue();
    let current = this;
    myQ.enqueue(current);
    while (!myQ.isEmpty()) {
      current = myQ.dequeue();
      current.value = cb(current.value);
      if (current.left) myQ.enqueue(current.left);
      if (current.right) myQ.enqueue(current.right);
    }
    return this; 
  }   
}
module.exports = BinarySearchTree;
