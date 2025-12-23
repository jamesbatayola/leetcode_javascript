// Replace Elements With Greatest Element On Right Side

// You are given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// Example 1:
// Input: arr = [2,4,5,3,1,2]
// Output: [5,5,3,2,2,-1]

// Example 2:
// Input: arr = [3,3]
// Output: [3,-1]

// Constraints:
// 1 <= arr.length <= 10,000
// 1 <= arr[i] <= 100,000

class Solution {
	/**
	 * @param {number[]} arr
	 * @return {number[]}
	 */
	replaceElements(arr) {
		const res = [];

		for (let i = 1; i < arr.length; i++) {
			res.push(Math.max(...arr.slice(i)));
		}

		res.push(-1);

		return res;
	}

	// Neetcode Optimal Solution
	_replaceElements(arr) {
		let len = arr.length;
		const ans = new Array(len);
		let rightMax = -1;
		for (let i = len - 1; i >= 0; i--) {
			ans[i] = rightMax;
			rightMax = Math.max(arr[i], rightMax);
		}
		return res;
	}
}
