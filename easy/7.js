// 27. Remove Element

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
	let left = 0;
	let right = nums.length - 1;

	while (left !== right) {
		if (nums[left] === val && nums[right] !== val) {
			const temp = nums[left];
			nums[left] = nums[right];
			nums[right] = temp;
			left++;
			right--;
		}

		if (nums[right] === val) right--;
		if (nums[left] === val) left++;
	}

	const res = nums.filter((e) => e !== val);
};

console.log(removeElement([3, 2, 2, 3], 3));
