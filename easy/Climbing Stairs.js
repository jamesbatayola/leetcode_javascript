// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:

// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */

// Memoization Dynamiic Programming
function climbStairs(n) {
	const map = new Map();

	function rec(m) {
		// Cache
		if (map.has(m)) return map.get(m);

		// Base case
		if (m > n) return 0;
		if (m === n) return 1;

		const val = rec(m + 1) + rec(m + 2);
		map.set(m, val);
		return val;
	}

	return rec(0);
}

// Bottom-up Dynamic Programming
function _climbStairs(n) {
	let one = 1,
		two = 1;

	for (let i = 0; i < n - 1; i++) {
		const temp = one;
		one += two;
		two = temp;
	}

	return one;
}

console.log(climbStairs(5));
