// Group Shifted Strings

// Perform the following shift operations on a string:

// Right shift: Replace every letter with the successive letter of the English alphabet, where 'z' is replaced by 'a'. For example, "abc" can be right-shifted to "bcd" or "xyz" can be right-shifted to "yza".

// Left shift: Replace every letter with the preceding letter of the English alphabet, where 'a' is replaced by 'z'. For example, "bcd" can be left-shifted to "abc" or "yza" can be left-shifted to "xyz".

// We can keep shifting the string in both directions to form an endless shifting sequence.

// For example, shift "abc" to form the sequence: ... <-> "abc" <-> "bcd" <-> ... <-> "xyz" <-> "yza" <-> .... <-> "zab" <-> "abc" <-

// You are given an array of strings strings, group together all strings[i] that belong to the same shifting sequence. You may return the answer in any order.

// Example 1:
// Input: strings = ["abc","bcd","acef","xyz","az","ba","a","z"]
// Output: [["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]

// Example 2:
// Input: strings = ["a"]
// Output: [["a"]]
// Constraints:

// 1 <= strings.length <= 200
// 1 <= strings[i].length <= 50
// strings[i] consists of lowercase English letters.

//! ---------- MY SOLUTION ---------- //
/**
 * @param {string[]} strings
 * @return {string[][]}
 */
function groupStrings(strings) {
	if (strings.length < 1 || 200 < strings.length) return -1;

	const hash = {};

	function calculate_pattern(str) {
		const nums = str.split("").map((l) => l.charCodeAt(0));

		if (nums.length === 1) return "alone";

		const pattern = [];

		for (let i = 0; i < nums.length - 1; i++) {
			// exception
			// if ((nums[i] === 97 && nums[i + 1] === 122) || (nums[i] === 122 && nums[i + 1] === 97)) {
			// 	pattern.push(1);
			// } else {
			// 	pattern.push(nums[i] - nums[i + 1]);
			// }

			pattern.push(Math.abs(nums[i] % 26) - (nums[i + 1] % 26));
		}

		return pattern.join(",");
	}

	for (let str of strings) {
		const pattern = calculate_pattern(str);

		if (!hash[pattern]) {
			hash[pattern] = [];
		}

		hash[pattern].push(str);
	}

	const res = [];

	for (let [_, v] of Object.entries(hash)) {
		res.push([...v]);
	}

	return res;
}

console.log(groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]));
console.log(groupStrings(["a"]));
console.log(groupStrings(["ab", "ba"]));
console.log(groupStrings(["aa", "bb", "b"]));
