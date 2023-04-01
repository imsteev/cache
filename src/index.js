const LRUCache = require("./lib/LRUCache");

const capacity = 4;

const lru = new LRUCache(50);

for (let i = 0; i < capacity; i++) {
  lru.put(i + 1, i + 1);
}

lru.dll.print();
