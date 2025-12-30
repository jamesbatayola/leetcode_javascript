// Max Consecutive Ones

// You are given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 3

// Example 2:
// Input: nums = [1,0,1,1,0,1]
// Output: 2

// Constraints:
// 1 <= nums.length <= 100,000
// nums[i] is either 0 or 1.

// MY SOLUTION
function findMaxConsecutiveOnes(nums) {
	let largest = 0;
	let ones = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0 || i === nums.length) {
			largest = Math.max(ones, largest);
			ones = 0;
			continue;
		}

		ones++;
	}

	return Math.max(ones, largest);
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
