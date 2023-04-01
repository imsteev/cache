// Node holds a value and pointers to its neighbors, next and prev.
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

module.exports = Node;
