// Group Anagrams
// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:

// Input: strs = ["x"]

// Output: [["x"]]
// Example 3:

// Input: strs = [""]

// Output: [[""]]
// Constraints:

// 1 <= strs.length <= 1000.
// 0 <= strs[i].length <= 100
// strs[i] is made up of lowercase English letters.

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */

  groupAnagrams(strs) {
    const res = {};
    for (const str of strs) {
      const count = new Array(26).fill(0);
      for (const c of str) {
        const pos = c.charCodeAt(0) - 97;
        count[pos] += 1;
      }
      const key = count.join(",");
      if (!res[key]) {
        res[key] = [];
      }
      res[key].push(str);
    }
    return Object.values(res);
  }
}

const strs = ["act", "pots", "tops", "cat", "stop", "hat"];
const s = new Solution();

console.log(s.groupAnagrams(strs));

// My Solution //
// sort(str) {
//   return str.split("").sort().join("");
// }

// groupAnagrams(strs) {
//   // constrains
//   if (strs.length === 1) return [[strs]];
//   if (strs === "") return [[""]];

//   const _strs = new Set(strs.map((x) => this.sort(x)));

//   const res = [];

//   for (const i of _strs) {
//     const temp = [];
//     for (const str of strs) {
//       if (i === this.sort(str)) temp.push(str);
//     }
//     res.push(temp);
//   }

//   return res;
// }
