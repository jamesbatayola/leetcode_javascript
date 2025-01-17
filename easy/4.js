// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Constraints:

//     1 <= s.length <= 104
//     s consists of parentheses only '()[]{}'.

// ----- MY ANSWER ----- //

var isValid = function (s) {
   const pairs = new Map([
      ["(", 0],
      [")", 1],
      ["[", 5],
      ["]", 6],
      ["{", 10],
      ["}", 11],
   ]);

   isValid_1 = true;
   for (let i = 0; i < s.length / 2; i++) {
      if (pairs.get(s[i]) + 1 !== pairs.get(s.at(0 - (i + 1)))) {
         isValid_1 = false;
         break;
      }
   }

   isValid_2 = true;
   for (let i = 0; i < s.length; i += 2) {
      if (pairs.get(s[i]) + 1 !== pairs.get(s[i + 1])) {
         isValid_2 = false;
         break;
      }
   }

   return isValid_1 || isValid_2 ? true : false;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("([])"));
console.log(isValid("(]"));

// ----- SOLUTION ----- //

var _isValid = function (s) {
   const stack = [];
   let parens = "() {} []";
   let i = 0;

   while (i < s.length) {
      stack.push(s[i]);
      i++;

      let open = stack[stack.length - 2];
      let close = stack[stack.length - 1];

      let pattern = open + close;
      if (parens.includes(pattern)) {
         stack.pop();
         stack.pop();
      }
   }

   return stack.length === 0;
};

console.log(_isValid("()"));
console.log(_isValid("()[]{}"));
console.log(_isValid("([])"));
console.log(_isValid("(]"));
