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
    if (this.value === undefined) {
      this.value = value;
    } else if (this.value >= value) {
    if (this.left === null) {
        this.left = new BinarySearchTree;
        this.left.value = value;
      } else {
        this.left.insert(value);
      }
  } else {
    if (this.right === null) {
        this.right = new BinarySearchTree;
        this.right.value = value;
      } else {
        this.right.insert(value);
      }
  }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
     if (this.value === target) {
      return true;
    } else if (this.value > target) {
      if (this.left === null)  return false;
      return this.left.contains(target);
    } else {
      if (this.right === null)  return false;
      return this.right.contains(target);
    }
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process. 
  // Below is solution of preorder BST Call (order is root -> left node -> right node)
  depthFirstForEach(cb) {
    if (!this.value) return;
    else if (!this.left && !this.right) {
        cb(this.value);
      } else if (!this.left) {
      cb(this.value);
      this.right.depthFirstForEach(cb);
    } else if (!this.right) {
      cb(this.value);
      this.left.depthFirstForEach(cb);
    } else {
      cb(this.value);
      this.left.depthFirstForEach(cb);
      this.right.depthFirstForEach(cb);
    } 
  }

  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  
  breadthFirstForEach(cb) {
    if (!this.value) return;
    else { 
      const myQueue = new Queue();
      myQueue.enqueue(this.value);
      while (!myQueue.isEmpty()) {

      }
    }
  }   
}

module.exports = BinarySearchTree;
