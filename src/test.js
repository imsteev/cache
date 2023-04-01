const LRUCache = require("./LRUCache");

function TestLRUCache() {
  TestLRUCacheCapacityOne();
  TestLRUCacheCapacityTwo();
  console.log("tests passed!");
}

function TestLRUCacheCapacityOne() {
  const lru = new LRUCache(1);
  lru.put(1, 1); // 1
  assert(lru.get(1), 1); // 1
  lru.put(2, 2); // 2
  assert(lru.get(1), -1);
  assert(lru.get(2), 2); // 2
  lru.put(1, 1); // 1
  assert(lru.get(1), 1); // 1
  assert(lru.get(2), -1);
}

function TestLRUCacheCapacityTwo() {
  const lru = new LRUCache(2);
  lru.put(1, 1); // 1
  lru.put(2, 2); // 1 <> 2
  assert(lru.get(1), 1); // 2 <> 1
  assert(lru.get(2), 2); // 1 <> 2
  lru.put(3, 3); // 2 <> 3
  assert(lru.get(1), -1);
  assert(lru.get(3), 3); // 2 <> 3
  assert(lru.get(2), 2); // 3 <> 2
  lru.put(4, 4); // 2 <> 4
  assert(lru.get(2), 2); // 4 <> 2
  lru.put(5, 5); // 2 <> 5
  assert(lru.get(4), -1);
}

function TestLRUCacheCapacityThree() {
  const lru = new LRUCache(3);
}

function TestLRUCacheCapacityFour() {
  const lru = new LRUCache(4);
}

function assert(a, b) {
  if (a !== b) {
    throw Error(`${a} does not equal ${b}`);
  }
}

TestLRUCache();
