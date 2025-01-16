// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

//     1 <= strs.length <= 200
//     0 <= strs[i].length <= 200
//     strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
   let res = "";
   let shortest = strs[0];

   for (let str of strs) {
      if (shortest.length > str.length) {
         shortest = str;
      }
   }

   outer: for (let i = 0; i < shortest.length; i++) {
      isTrue = true;
      for (let j = 0; j < strs.length; j++) {
         if (shortest[i] !== strs[j][i]) {
            isTrue = false;
            break outer;
         }
      }
      res += isTrue ? shortest[i] : "";
   }

   return res;
}

// ----- OPTIMIZE ----- //

function _longestCommonPrefix(strs) {
   if (strs.length === 0) return ""; // Handle edge case of an empty array

   let prefix = strs[0]; // Start with the first string as the assumed prefix

   for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
         prefix = prefix.slice(0, -1); // Trim the prefix from the end
         if (prefix === "") return ""; // Return early if the prefix becomes empty
      }
   }

   return prefix; // Return the final common prefix
}
