// 146. LRU Cache

// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

// The functions get and put must each run in O(1) average time complexity.

// Example 1:
// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

// Constraints:

// 1 <= capacity <= 3000
// 0 <= key <= 104
// 0 <= value <= 105
// At most 2 * 105 calls will be made to get and put.

//! Edge Cases | 17/24 test passed

class LRUCache {
	constructor(size = 0) {
		this.items = new Map();

		this.size = size;
		this.log = [];
	}

	get(key) {
		const val = this.items.get(key);

		if (val === undefined) return -1;

		// store key in cache
		if (!this.log.length || this.log.at(-1) !== key) {
			this.log.push(key);
		}

		// cache size exceeded
		if (this.log.length > this.size) {
			this.log.shift();
		}

		return val;
	}

	put(key, val) {
		this.items.set(key, val);

		// Store in cache
		if (!this.log.length || this.log.at(-1) !== key) {
			this.log.push(key);
		}

		let least;

		// cache size exceeded
		if (this.log.length > this.size) {
			least = this.log.shift();
		}

		// Map keys exceeded
		if (this.items.size > this.size) {
			this.items.delete(least);
		}
	}
}

// const lru = new LRUCache(2);
// lru.put(1, 1);
// lru.put(2, 2);
// lru.get(1);
// lru.put(3, 3);
// lru.get(2);

// const lru = new LRUCache(2);
// console.log(lru.put(1, 0));
// console.log(lru.put(2, 2));
// console.log(lru.get(1));
// console.log(lru.put(3, 3));
// console.log(lru.get(2));
// console.log(lru.put(4, 4));
// console.log(lru.get(1));
// console.log(lru.get(3));
// console.log(lru.get(4));

const lru = new LRUCache(2);
console.log(lru.put(2, 1));
console.log(lru.put(2, 2));
console.log(lru.get(2));
console.log(lru.put(1, 1));
console.log(lru.put(4, 1));
console.log(lru.get(2));
