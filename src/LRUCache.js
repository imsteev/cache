const Node = require("./Node");
const DoublyLinkedList = require("./DoublyLinkedList");

// LRUCache takes a doubly-linked hashmap approach
class LRUCache {
  constructor(capacity) {
    if (capacity <= 0) {
      throw Error("capacity must be positive number");
    }
    this.capacity = capacity;
    this.dll = new DoublyLinkedList();
    this.map = {};
  }

  get(key) {
    if (key in this.map) {
      const node = this.map[key];
      this.dll.remove(node);
      this.dll.push(node);
      return node.val;
    }
    return -1;
  }

  put(key, val) {
    // set new value
    if (!(key in this.map)) {
      this.map[key] = new Node(key, val);
    } else {
      this.map[key].val = val;
      this.dll.remove(this.map[key]);
    }

    // make sure upserted key is "used"
    this.dll.push(this.map[key]);

    if (this.dll.size > this.capacity) {
      delete this.map[this.dll.head.key];
      this.dll.remove(this.dll.head);
    }
  }
}

module.exports = LRUCache;
