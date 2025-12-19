// Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]
// Example 2:

// Input: nums = [7,7], k = 1

// Output: [7]
// Constraints:

// 1 <= nums.length <= 10^4.
// -1000 <= nums[i] <= 1000
// 1 <= k <= number of distinct elements in nums.

class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} k
	 * @return {number[]}
	 */
	// topKFrequent(nums, k) {
	// 	const map = new Map();

	// 	for (let num of nums) {
	// 		map.set(num, map.get(num) + 1 || 1);
	// 	}

	// 	let sortNums = [...map].sort((a, b) => a[1] - b[1]).map((x) => x[0]);

	// 	const res = sortNums.slice(sortNums.length - k);

	// 	return res;
	// }

	// ----- NEETCODE SOLUTION ----- //
	topKFrequent(nums, k) {
		const map = new Map();

		for (let n of nums) {
			map.set(n, map.get(n) + 1 || 1);
		}

		// Create bucket array
		const arr = [];
		for (let i = 0; i < nums.length + 1; i++) {
			arr[i] = [];
		}

		for (let [k, v] of map) {
			arr[v].push(k);
		}

		const res = [];

		for (let i = arr.length - 1; i > 0; i--) {
			if (res.length === k) break;
			if (!arr[i].length) continue;
			res.push(...arr[i]);
		}

		return res;
	}
}

const s = new Solution();

console.log(s._topKFrequent([1, 2, 2, 3, 3, 3], 2));
console.log(s._topKFrequent([7, 7], 1));
