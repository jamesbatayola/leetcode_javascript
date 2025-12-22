// Score of a String
// Solved
// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

// Example 1:

// Input: s = "code"

// Output: 24
// Explanation: The ASCII values of the characters in the given string are: 'c' = 99, 'o' = 111, 'd' = 100, and 'e' = 101. The score of s will be: |111 - 99| + |100 - 111| + |101 - 100|.

// Example 2:

// Input: s = "neetcode"

// Output: 65
// Constraints:

// 2 <= s.length <= 100
// s is made up of lowercase English letters.

class Solution {
	/**
	 * @param {string} s
	 * @return {number}
	 */
	scoreOfString(s) {
		const nums = s.split("").map((e) => e.charCodeAt(0));
		let score = 0;
		for (let i = 0; i < nums.length - 1; i++) {
			score += Math.abs(nums[i] - nums[i + 1]);
		}
		return score;
	}
}
