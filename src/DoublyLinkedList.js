class DoublyLinkedList {
  #head;
  #tail;
  #size = 0;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  push(node) {
    if (!this.#head) {
      this.#head = node;
      this.#tail = node;
    } else {
      // Make node the new tail
      node.next = null;
      node.prev = this.#tail;
      this.#tail.next = node;
      this.#tail = node;
    }
    this.#size++;
  }

  remove(node) {
    const prev = node.prev;
    const next = node.next;
    if (!prev && !next) {
      this.#head = null;
      this.#tail = null;
    } else if (!prev && next) {
      // set a new head
      this.#head = next;
      this.#head.prev = null;
    } else if (prev && !next) {
      // set a new tail
      this.#tail = prev;
      this.#tail.next = null;
    } else {
      prev.next = next;
      next.prev = prev;
    }
    this.#size--;
  }

  removeHead() {
    if (!this.#head) {
      return null;
    }
    const node = this.#head;
    this.remove(this.#head);
    return node;
  }

  length() {
    return this.#size;
  }

  print() {
    const vals = [];
    let ptr = this.#head;
    if (!ptr) {
      return "empty list";
    }
    for (let i = 0; i < this.length(); i++) {
      vals.push(ptr.key);
      ptr = ptr.next;
    }
    console.log(vals.join("<>"), `(size: ${this.length()})`);
  }
}

module.exports = DoublyLinkedList;
