// Longest Common Prefix

// You are given an array of strings strs. Return the longest common prefix of all the strings.

// If there is no longest common prefix, return an empty string "".

// Example 1:

// Input: strs = ["bat","bag","bank","band"]

// Output: "ba"
// Example 2:

// Input: strs = ["dance","dag","danger","damage"]

// Output: "da"
// Example 3:

// Input: strs = ["neet","feet"]

// Output: ""
// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] is made up of lowercase English letters if it is non-empty.

class Solution {
	/**
	 * @param {string[]} strs
	 * @return {string}
	 */

	//! ----- UNFINISHED ----- //
	longestCommonPrefix(strs) {
		if (strs.length < 1 || strs.length > 200) return -1;

		const arr = new Array(26).fill(0);

		for (let str of strs) {
			for (let char of str) {
				const pos = char.charCodeAt(0) - 97;
				arr[pos] += 1;
			}
		}

		let prefixCount = Math.max(...arr);
		let prefix = "";

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === prefixCount) {
				const str = String.fromCharCode(i + 97);
				prefix += str;
			}
		}

		return prefix;
	}
}

const s1 = new Solution();

console.log(s1.longestCommonPrefix(["bat", "bag", "bank", "band"]));
