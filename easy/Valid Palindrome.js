// 125. Valid Palindrome

// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

// Example 1:
// Input: s = "Was it a car or a cat I saw?"
// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

// Example 2:
// Input: s = "tab a cat"
// Output: false
// Explanation: "tabacat" is not a palindrome.

// Constraints:
// 1 <= s.length <= 1000
// s is made up of only printable ASCII characters.

function isPalindrome(s) {
	let l = 0;
	let r = s.length - 1;

	while (l < r) {
		while (!isAlphaNumeric(s[l]) && l < r) l++;
		while (!isAlphaNumeric(s[r]) && r > l) r--;

		if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;

		l++;
		r--;
	}

	return true;
}

// HELPER
function isAlphaNumeric(n) {
	const regex = /^[A-Za-z0-9]+$/;
	return regex.test(n);
}

console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("tab a cat"));
console.log(isPalindrome(".,"));
console.log(isPalindrome("Madam, in Eden, I'm Adam"));

// function isPalindrome(s) {
// 	let l = 0,
// 		r = s.length - 1;

// 	while (l < r) {
// 		while (l < r && !alphaNum(s[l])) {
// 			l++;
// 		}
// 		while (r > l && !alphaNum(s[r])) {
// 			r--;
// 		}
// 		if (s[l].toLowerCase() !== s[r].toLowerCase()) {
// 			return false;
// 		}
// 		l++;
// 		r--;
// 	}
// 	return true;
// }

// // HELPER
// function alphaNum(c) {
// 	return (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
// }

// console.log(isPalindrome("Was it a car or a cat I saw?"));
// console.log(isPalindrome("tab a cat"));
// console.log(isPalindrome(".,"));
// console.log(isPalindrome("Madam, in Eden, I'm Adam"));
