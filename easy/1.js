// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// function twoSum(nums, target) {
//    for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//          if (nums[i] + nums[j] === target) {
//             return [i, j];
//          }
//       }
//    }
// }

// --- OPTIAMAL --- //

// function _twoSum(nums, target) {
//   const pairs = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     pairs.set(nums[i], i);
//   }

//   for (const [key, _] of pairs) {
//     const numToGet = target - key;
//     if (pairs.get(numToGet) !== undefined) {
//       return [pairs.get(key), pairs.get(numToGet)];
//     }
//   }

//   return -1;
// }

// console.log(_twoSum([2, 7, 11, 15], 9));

function __twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const numToAdd = target - nums[i];
    if (map.has(numToAdd)) {
      return [map.get(numToAdd), i];
    }
    map.set(nums[i], i);
  }

  return -1;
}

console.log(__twoSum([2, 7, 11, 15], 9));
console.log(__twoSum([4, 5, 6], 10));
console.log(__twoSum([5, 5], 10));
