// Node holds a value and pointers to its neighbors, next and prev.
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // Make node the new tail
      node.next = null;
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  remove(node) {
    const prev = node.prev;
    const next = node.next;
    if (!prev && !next) {
      this.head = null;
      this.tail = null;
    } else if (!prev && next) {
      // set a new head
      this.head = next;
      this.head.prev = null;
    } else if (prev && !next) {
      // set a new tail
      this.tail = prev;
      this.tail.next = null;
    } else {
      prev.next = next;
      next.prev = prev;
    }
    this.size--;
  }

  print() {
    const vals = [];
    let ptr = this.head;
    if (!ptr) {
      return "empty list";
    }
    for (let i = 0; i < this.size; i++) {
      vals.push(ptr.key);
      ptr = ptr.next;
    }
    console.log(vals.join("<>"), `(size: ${this.size})`);
  }
}

module.exports.Node = Node;
module.exports.DoublyLinkedList = DoublyLinkedList;
