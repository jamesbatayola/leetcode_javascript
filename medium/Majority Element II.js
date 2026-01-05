// Majority Element II

// You are given an integer array nums of size n, find all elements that appear more than ⌊ n/3 ⌋ times. You can return the result in any order.

// Example 1:
// Input: nums = [5,2,3,2,2,2,2,5,5,5]
// Output: [2,5]

// Example 2:
// Input: nums = [4,4,4,4,4]
// Output: [4]

// Example 3:
// Input: nums = [1,2,3]
// Output: []

// Constraints:
// 1 <= nums.length <= 50,000.
// -1,000,000,000 <= nums[i] <= 1,000,000,000

// Follow up: Could you solve the problem in linear time and in O(1) space?

function majorityElement(nums) {
	const res = [];
	const h = Math.floor(nums.length / 3);

	const map = new Map();

	for (let n of nums) {
		if (map.get(n) > h) continue;

		map.set(n, map.get(n) + 1 || 1);

		if (map.get(n) > h) res.push(n);
	}

	return res;
}

console.log(majorityElement([5, 2, 3, 2, 2, 2, 2, 5, 5, 5]));
console.log(majorityElement([4, 4, 4]));
console.log(majorityElement([1, 2, 3]));
