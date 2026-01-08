// 680. Valid Palindrome II

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:
// Input: s = "aba"
// Output: true

// Example 2:
// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

// Example 3:
// Input: s = "abc"
// Output: false

// Constraints:
// 1 <= s.length <= 105
// s consists of lowercase English letters.

//! MY SOLUTOIN (EDGE CASE | 30/31 TEST PASSED)
// function validPalindrome(s) {
// 	let l = 0,
// 		r = s.length - 1;

// 	let skip_count = 0;

// 	while (l < r) {
// 		while (s[l] !== s[r] && skip_count < 1) {
// 			if (s[l + 1] === s[r] && l < r) {
// 				l++;
// 			} else if (s[l] === s[r - 1] && r > l) {
// 				r--;
// 			}

// 			skip_count++;
// 		}

// 		if (s[l] !== s[r]) {
// 			return false;
// 		}

// 		l++;
// 		r--;
// 	}

// 	return true;
// }

// ---------- NEETCODE SOLUTION ---------- //

function validPalindrome(s) {
	let l = 0,
		r = s.length - 1;

	// helper
	function isPalindrome(left, right) {
		while (left < right) {
			if (s[left] !== s[right]) return false;
			left++;
			right--;
		}
		return true;
	}

	while (l < r) {
		if (s[l] !== s[r]) {
			return isPalindrome(l, r - 1) || isPalindrome(l + 1, r);
		}
		l++;
		r--;
	}

	return true;
}

console.log(validPalindrome("aca"));
console.log(validPalindrome("abbadc"));
console.log(validPalindrome("abbda"));
console.log(validPalindrome("acdccba"));
console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"));

console.log(validPalindrome("eceec"));
