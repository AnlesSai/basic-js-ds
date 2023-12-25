const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.tail = null;
    this.first = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    let last = {value, next: null};
    if (this.length) {
      this.tail.next = last;
      this.tail = this.tail.next;
    }
    else {
      this.first = last;
      this.tail = last;
    }
    this.length ++;
  }

  dequeue() {
    let current = this.first;
    this.first = this.first.next;
    this.length --;
    return current.value
  }
}

module.exports = {
  Queue
};
