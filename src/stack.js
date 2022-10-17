const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 class Stack {
  arr = [];
  
  push(element) {
    this.arr.push(element);
  }

  pop() {
    if(this.arr.length == 0) return undefined
    const res = this.arr.splice(this.arr.length-1,1)
    return res[0]
  }

  peek() {
    if(this.arr.length == 0) return undefined
    return this.arr[this.arr.length-1]
  }
}

module.exports = {
  Stack
};
